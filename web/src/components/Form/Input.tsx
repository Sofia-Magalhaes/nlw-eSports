import { InputHTMLAttributes } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Input(props:InputProps ) {
  return (          
      <input
      {...props}              
        className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
      />            
  );
}
