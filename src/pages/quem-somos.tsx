
import React, { JSX } from "react";
import { Frame } from "../components/Frame";
import { Rodap } from "../components/Rodap";

const QuemSomosNos = (): JSX.Element => {
  return (
    <div className="bg-[#181816] w-full min-h-screen flex flex-col">
      <Frame />
      
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-32 flex flex-col items-center justify-center text-center">
        <h1 className="font-titulo-poppins-h1 text-4xl md:text-5xl mb-8">
          <b>Quem somos nós?</b>
        </h1>
        
        <h2 className="font-h3-POPPINS text-claro text-2xl md:text-3xl font-bold mb-4">
          <b>Somos uma plataforma de ensino online,</b>
        </h2>
        
        <p className="font-h5-poppins text-claro text-lg md:text-xl max-w-prose mb-8">
          nossa intenção é revolucionar a forma como você aprende design, marketing e outras áreas do digital.
        </p>
        
        <p className="text-claro text-base max-w-prose font-thin">
          Nascemos em Outubro do ano de 2025 no Centro Universitário UniAnchieta, em Jundiaí-SP
        </p>
      </main>

      <Rodap />
    </div>
  );
};

export default QuemSomosNos;
