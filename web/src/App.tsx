// JSX: Javascript + XML(HTML) -> escrever HTML diretamente do JS
import { MagnifyingGlassPlus } from "phosphor-react";
import { GameBanner } from "./components/GameBanner";

import "./styles/main.css";

import logoImg from "./assests/logo-nlw-esports.svg";
import { CreateAdBanner } from "./components/CreateAdBanner";

function App() {
  return (
    
    <div className="max-w-[1344px] mx-auto flex flex-col items-center mt-20">
      <img src={logoImg} alt="Logo" />

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
      <GameBanner bannerUrl="/game-1.png" title="League of Legends" adsCount={5}/>              
      </div>
      {/* Fim da div dos jogos */}
      {/* Box de anúncio*/}
      <CreateAdBanner/>
    </div>
  );
}

export default App;
