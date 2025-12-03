import React, { JSX } from "react";
import { Frame } from "../../components/Frame";
import { Rodap } from "../../components/Rodap";

const Blog = (): JSX.Element => {
  return (
    <div className="bg-[#181816] w-full min-h-screen flex flex-col">
      <Frame />
      
      <main className="flex-grow w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          
          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <h1 className="font-titulo-poppins-h1 text-azul-principal text-4xl md:text-5xl">
              BLOG
            </h1>
            
            <div className="flex flex-col gap-6">
              <h2 className="font-h3-POPPINS text-claro text-3xl md:text-4xl">
                IA: Transformando a Tecnologia
              </h2>
              
              <div className="flex flex-col gap-4">
                <p className="font-h5-poppins text-claro">
                  Como a Inteligência Artificial Está Transformando o Futuro da Tecnologia
                </p>
                <p className="font-h6-poppins text-claro/70">
                  01/01/2025
                </p>
              </div>

              <p className="[font-family:'Inter',Helvetica] font-normal text-claro text-base leading-relaxed">
                A inteligência artificial (IA) tem se consolidado como uma das
                principais forças que impulsionam a inovação tecnológica no
                mundo atual...
              </p>
              
              <div className="mt-4">
                <a href="#" className="inline-block px-8 py-3 bg-azul-principal text-azul-secundario rounded-2xl font-button-2 font-bold hover:bg-opacity-80 transition-colors">
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full md:w-1/2">
            <img
              className="w-full h-auto object-cover rounded-lg"
              alt="AI Technology"
              src="https://c.animaapp.com/0emaYJes/img/image-1@2x.png"
            />
          </div>
        </div>
      </main>

      <Rodap />
    </div>
  );
};

export default Blog;