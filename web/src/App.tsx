// JSX: Javascript + XML(HTML) -> escrever HTML diretamente do JS
import * as Dialog from "@radix-ui/react-dialog";

import { useState, useEffect } from "react";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";

import "./styles/main.css";

import logoImg from "./assests/logo-nlw-esports.svg";

import { CreateAdModal } from "./components/CreateAdModal";

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

        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
