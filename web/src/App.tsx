// JSX: Javascript + XML(HTML) -> escrever HTML diretamente do JS
import * as Dialog from "@radix-ui/react-dialog";

import { useState, useEffect } from "react";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { GameController } from "phosphor-react";

import "./styles/main.css";

import logoImg from "./assests/logo-nlw-esports.svg";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch(" http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center mt-20">
      <img src={logoImg} alt="Logo" />
      {/* Frase Seu Duo está aqui */}
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          {" "}
          duo
        </span>{" "}
        está aqui.
      </h1>
      {/* Div dos jogos */}
      <div className="grid grid-cols-6 gap-6 mt-14">
        {games.map((games) => {
          return (
            <GameBanner
              key={games.id}
              bannerUrl={games.bannerUrl}
              title={games.title}
              adsCount={games._count.ads}
            />
          );
        })}
      </div>
      {/* Fim da div dos jogos */}
      {/* Box de anúncio*/}
      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

          <Dialog.Content className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>

            <Dialog.Content>
              <form>
                <div>
                  <label htmlFor="game">Qual o game?</label>
                  <input id="game" type="text" placeholder="Selecione o game que desaja jogar" />
                </div>

                <div>
                  <label htmlFor="name">Seu nome (ou nickname)</label>
                  <input id="name" type="text" placeholder="Como te chamam dentro do game?" />
                </div>

                <div>
                  <div>
                    <label htmlFor="yearsPlaying">Jogo há quantos anos?</label>
                    <input id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO"/>
                  </div>
                  <div>
                    <label htmlFor="discord">Qual seu discord</label>
                    <input id="discord" type="text" placeholder="Usuario#0000"/>
                  </div>
                </div>

                  <div>
                    <div>
                      <label htmlFor="weekDays">Quando costuma jogar?</label>                      
                    </div>
                    <div>
                      <label htmlFor="hoursStart">Qual horário do dia?</label>
                      <div>
                        <input id="hoursStart" type="time" placeholder="De" />
                        <input id="hourEnd" type="time" placeholder="Até" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <input type="checkbox"/> 
                    Costumo me conectar ap chat de voz                   
                  </div> 

                  <footer>
                    <button>Cancelar</button>
                    <button type="submit"><GameController/> Encontrar duo</button>
                  </footer>

              </form>
            </Dialog.Content>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
