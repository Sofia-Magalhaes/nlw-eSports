// JSX: Javascript + XML(HTML) -> escrever HTML diretamente do JS
import "./styles/main.css";

import logoImg from "./assests/logo-nlw-esports.svg";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logo" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          {" "}
          duo
        </span>{" "}
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="">
          <img src="/game-1.png" alt="" />
        </a>  
        <a href="">
          <img src="/game-2.png" alt="" />
        </a>  
        <a href="">
          <img src="/game-3.png" alt="" />
        </a>  
        <a href="">
          <img src="/game-4.png" alt="" />
        </a>  
        <a href="">
          <img src="/game-5.png" alt="" />
        </a>  
        <a href="">
          <img src="/game-6.png" alt="" />
        </a>  

             
      </div>
    </div>
    
  );
}

export default App;
