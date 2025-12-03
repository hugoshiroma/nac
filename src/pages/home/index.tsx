import React from "react";
import { Frame } from "../../components/Frame";
import { SocialIcons } from "../../components/SocialIcons";

const Home = () => {
  return (
    <div className="bg-escuro w-full min-h-screen flex flex-col items-center text-claro font-h5-poppins relative">
      {/* Background Image Layer */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          className="w-full h-full object-cover"
          alt="Background"
          src="https://c.animaapp.com/p5Mjlt9W/img/background.png"
        />
      </div>

      {/* Header - Stays at the top */}
      <header className="w-full z-20">
        {/* The Frame component was refactored to be a responsive header/nav */}
        <Frame />
      </header>

      {/* Main Content Wrapper */}
      <main className="w-full flex flex-col items-center z-10">
        {/* Hero Section - Apply mt-[20vh] here */}
        <section className="flex h-screen items-center justify-center w-full max-w-6xl px-4 md:px-8 lg:px-12">
          <div className="mt-[-30vh] w-full min-h-[289px] flex flex-col justify-center items-center text-center p-8 bg-[#ffffff24] rounded-[48px] border border-solid border-[#ffffff1f] backdrop-blur-md">
            <h1 className="font-titulo-poppins-h1 text-3xl md:text-5xl">
              Mais do que uma simples plataforma
            </h1>
            <h2 className="font-h3-POPPINS text-xl md:text-3xl mt-4">
              Networking. Aprendizado. Crescimento.
            </h2>
          </div>
        </section>

        {/* Areas Section */}
        <section className="md:mt-100 mt-56 w-full max-w-6xl px-4 md:px-8 lg:px-12 flex flex-col items-center">
          <h3 className="font-h3-POPPINS text-2xl md:text-3xl text-azul-secundario"><b>Áreas</b></h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 w-full">
            {/* Cursos Card */}
            <div className="p-8 backdrop-blur-md backdrop-brightness-100 [-webkit-backdrop-filter:blur(6.3px)_brightness(100%)] bg-[#090808]/50 rounded-2xl flex flex-col items-center text-center">
              <h4 className="font-h2-POPPINS text-3xl text-azul-principal"><b>Cursos</b></h4>
              <p className="mt-6 text-base max-w-sm">
                Esta seção documenta minha jornada de aprendizado contínuo. Aqui, apresento as certificações, workshops e cursos.
              </p>
              <button className="mt-8 px-12 py-2 bg-azul-principal rounded-full text-claro font-bold text-lg hover:bg-opacity-80 transition-colors">
                Acessar
              </button>
            </div>

            {/* Laboratório Card */}
            <div className="p-8 backdrop-blur-md backdrop-brightness-100 [-webkit-backdrop-filter:blur(6.3px)_brightness(100%)] bg-[#090808]/50 rounded-2xl flex flex-col items-center text-center">
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
        <section className="mt-48 md:mt-20 w-full max-w-5xl px-4 md:px-8 lg:px-12 flex flex-col items-center text-center">
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

      {/* Footer */}
      <footer className="w-full flex flex-col items-center z-10 mt-48 md:mt-64 mb-20">
        <div className="flex items-center gap-6">
          <SocialIcons platform="instagram" />
          <SocialIcons platform="x-twitter" />
          <SocialIcons platform="linked-in" />
        </div>
      </footer>
    </div>
  );
};

export default Home;

