
import React, { JSX } from "react";
import Link from "next/link"; // For Next.js routing
import { Rodap } from "../components/Rodap";

const LoginPage = (): JSX.Element => {
  return (
    <div className="bg-[#181816] w-full min-h-screen flex flex-col">
      {/* Custom Header with only Logo */}
      <header className="w-full h-24 flex items-center px-4 md:px-8 lg:px-12 bg-azul-secundario z-20 sticky top-0">
        <Link href="/" className="w-14 h-14">
          <img
            className="w-full h-full object-contain"
            alt="Logo"
            src="/Frame 44.png" // Using the same logo as Frame component
          />
        </Link>
      </header>
      
      <main className="flex-grow w-full max-w-6xl mx-auto px-4 py-32 flex items-center justify-center">
        <div className="bg-azul-secundario p-8 md:p-12 rounded-[2rem] flex flex-col items-center max-w-md w-full text-claro shadow-lg">
          <h1 className="font-titulo-poppins-h1 text-azul-principal text-3xl md:text-4xl font-bold mb-8">
            Login
          </h1>
          
          <form className="w-full flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 w-full">
              <label htmlFor="email" className="font-h5-poppins text-claro w-12 text-left md:text-right">
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu email aqui"
                className="flex-grow p-3 rounded-md bg-claro/10 border border-claro/20 focus:outline-none focus:ring-2 focus:ring-azul-principal"
              />
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 w-full">
              <label htmlFor="password" className="font-h5-poppins text-claro w-12 text-left md:text-right">
                Senha:
              </label>
              <input
                type="password"
                id="password"
                placeholder="*********"
                className="flex-grow p-3 rounded-md bg-claro/10 border border-claro/20 focus:outline-none focus:ring-2 focus:ring-azul-principal"
              />
            </div>
            
            <button
              type="submit"
              className="mt-6 px-8 py-3 bg-azul-principal text-escuro font-bold rounded-lg text-lg hover:bg-opacity-80 transition-colors shadow-md"
            >
              Entrar
            </button>
          </form>
          
          <div className="mt-8 text-center text-sm">
            <p className="mb-2">
              Crie sua conta{" "}
              <Link href="/cadastro" className="text-azul-principal hover:underline">
                aqui
              </Link>
            </p>
            <p>
              Precisa de ajuda?{" "}
              <Link href="/ajuda" className="text-azul-principal hover:underline">
                Clique aqui
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Rodap />
    </div>
  );
};

export default LoginPage;
