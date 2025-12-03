import React from "react";
import { Frame } from "../components/Frame";
import { Rodap } from "../components/Rodap";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center text-claro font-h5-poppins relative min-h-screen">
      {/* Removed the absolute full-page background div */}

      {/* Header - Stays at the top */}
      <header className="w-full z-20 sticky top-0">
        <Frame />
      </header>

      {/* Main Content Wrapper */}
      <main className="bg-claro w-full flex flex-col items-center z-10">
        {/* Hero Section - Now has its own background */}
        <section className="w-full h-[90vh] px-4 md:px-8 lg:px-12 pt-48 bg-cover bg-center" style={{ backgroundImage: "url('/bg 2.png')" }}>
          <div className="w-full min-h-[289px] max-w-6xl mx-auto flex flex-col justify-center items-center text-center p-8 bg-[#ffffff24] rounded-[48px] border border-solid border-[#ffffff1f] backdrop-blur-md">
            <h1 className="font-titulo-poppins-h1 text-3xl md:text-5xl">
              <b>Mais do que uma simples plataforma</b>
            </h1>
            <h2 className="font-h3-POPPINS text-xl md:text-3xl mt-4">
              <b>Networking. Aprendizado. Crescimento.</b>
            </h2>
          </div>
        </section>

        {/* Areas Section */}
        <section className="bg-claro py-32 w-full max-w-6xl px-4 md:px-8 lg:px-12 flex flex-col items-center">
          <h3 className="font-h3-POPPINS text-2xl md:text-3xl text-azul-secundario"><b>Áreas</b></h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 w-full">
            {/* Cursos Card */}
            <div className="p-8 bg-[#090808]/100 rounded-2xl flex flex-col items-center text-center">
              <h4 className="font-h2-POPPINS text-3xl text-azul-principal"><b>Cursos</b></h4>
              <p className="mt-6 text-base max-w-sm">
                Esta seção documenta minha jornada de aprendizado contínuo. Aqui, apresento as certificações, workshops e cursos.
              </p>
              <button className="mt-8 px-12 py-2 bg-azul-principal rounded-full text-claro font-bold text-lg hover:bg-opacity-80 transition-colors">
                Acessar
              </button>
            </div>

            {/* Laboratório Card */}
            <div className="p-8 bg-[#090808]/100 rounded-2xl flex flex-col items-center text-center">
              <h4 className="font-h2-POPPINS text-3xl text-azul-principal"><b>Laboratório</b></h4>
              <p className="mt-6 text-base max-w-sm">
                Aqui é onde o designer prova seu valor além da estética. Ela não mostra apenas o resultado final, mas como o problema foi resolvido.
              </p>
              <button className="mt-8 px-12 py-2 bg-azul-principal rounded-full text-claro font-bold text-lg hover:bg-opacity-80 transition-colors">
                Acessar
              </button>
            </div>
          </div>
        </section>

        {/* Tends do Mercado Section */}
        <section className="bg-claro pb-32 w-full max-w-5xl px-4 md:px-8 lg:px-12 flex flex-col items-center text-center">
          <h3 className="font-h3-POPPINS text-3xl text-azul-secundario">
            <b>Tends do Mercado</b>
          </h3>
          <img
            className="w-full max-w-4xl h-auto mt-8"
            alt="Icons tends"
            src="https://c.animaapp.com/p5Mjlt9W/img/icons-tends.png"
          />
          <p className="font-thin mt-8 max-w-3xl text-base text-azul-secundario">
            A tendência atual no design gráfico vai além da estética; foca-se na performance mensurável. Ferramentas analíticas, como as do Google, são usadas para validar o direcionamento criativo. A configuração de campanhas agora exige testes A/B e personalização em tempo real. O sucesso não é mais subjetivo: o design deve comprovar seu impacto financeiro direto, otimizando a conversão e o custo por aquisição para justificar o investimento.
          </p>
        </section>
      </main>

      {/* Footer - Now has its own background */}
      <div className="w-full z-10 mt-auto">
        <Rodap />
      </div>
    </div>
  );
};

export default Home;