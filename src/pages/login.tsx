import React, { JSX, useState } from "react";
import Link from "next/link"; // For Next.js routing
import { Eye, EyeOff } from 'lucide-react'; // Import Eye and EyeOff from lucide-react
import { Rodap } from "../components/Rodap";
import Frame from "../components/Frame";

const LoginPage = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#181816] w-full min-h-screen flex flex-col">
      {/* Custom Header with only Logo */}
      <Frame />
      
      <main className="flex-grow w-full max-w-6xl mx-auto px-4 py-32 flex items-center justify-center">
        <div className="bg-azul-secundario p-8 md:p-12 rounded-[2rem] flex flex-col items-center max-w-md w-full text-claro shadow-lg">
          <h1 className="font-titulo-poppins-h1 text-azul-principal text-3xl md:text-4xl font-bold mb-8">
            Login
          </h1>
          
          <form className="w-full flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 w-full">
              <label htmlFor="email" className="font-h5-poppins text-claro w-20 text-left md:text-right">
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu email aqui"
                className="flex-grow p-3 rounded-md bg-claro/10 border border-claro/20 focus:outline-none focus:ring-2 focus:ring-azul-principal text-escuro"
              />
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 w-full">
              <label htmlFor="password" className="font-h5-poppins text-claro w-20 text-left md:text-right">
                Senha:
              </label>
              <div className="flex-grow relative"> {/* New wrapper for input and icon */}
                <input
                  type={showPassword ? "text" : "password"} // Conditional type
                  id="password"
                  placeholder="••••••••••"
                  className="w-full p-3 rounded-md bg-claro/10 border border-claro/20 focus:outline-none focus:ring-2 focus:ring-azul-principal text-escuro pr-10" // Added pr-10 for icon space
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-claro hover:text-azul-principal"
                >
                  {showPassword ? (
                    <Eye className="w-6 h-6" /> // Lucide Eye icon
                  ) : (
                    <EyeOff className="w-6 h-6" /> // Lucide EyeOff icon
                  )}
                </button>
              </div>
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