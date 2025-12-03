
import React, { JSX } from "react";
import { Frame } from "../components/Frame";
import { Rodap } from "../components/Rodap";

const Custom404Page = (): JSX.Element => {
  return (
    <div className="bg-[#181816] w-full min-h-screen flex flex-col">
      <Frame />
      
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center text-center">
        <h1 className="font-titulo-poppins-h1 text-azul-principal text-4xl md:text-5xl mb-8">
          <b>Essa página não existe.</b>
        </h1>
        <p className="font-h3-POPPINS text-claro text-lg md:text-xl">
          Verifique o endereço ou volte para a <a href="/" className="text-azul-principal hover:underline">página inicial</a>.
        </p>
      </main>

      <Rodap />
    </div>
  );
};

export default Custom404Page;
