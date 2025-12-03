import React from "react";

interface FrameProps {
  className?: string;
  group?: string;
}

export const Frame = ({
  className,
  group = "/Frame 44.png",
}: FrameProps) => {
  return (
    <nav
      className={`flex w-full h-24 items-center justify-between px-4 md:px-8 lg:px-12 bg-azul-secundario ${className}`}
    >
      {/* Left Side: Logo and Nav Links */}
      <div className="flex items-center gap-4 md:gap-8">
        {/* Logo */}
        <div className="w-14 h-14">
          <img
            className="w-full h-full object-contain"
            alt="Group"
            src={group}
          />
        </div>

        {/* Nav Links - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <a href="#" className="font-h5-poppins text-claro hover:text-azul-principal transition-colors">Cursos</a>
          <a href="#" className="font-h5-poppins text-claro hover:text-azul-principal transition-colors">Laboratório</a>
          <a href="#" className="font-h5-poppins text-claro hover:text-azul-principal transition-colors">Blog</a>
          <a href="#" className="font-h5-poppins text-claro hover:text-azul-principal transition-colors">Contato</a>
        </div>
      </div>

      {/* Right Side: Auth buttons */}
      <div className="flex items-center gap-4 md:gap-8">
        <a href="#" className="font-h5-poppins text-claro hover:text-azul-principal transition-colors">
          Login
        </a>
        <a href="#" className="px-4 py-2 bg-azul-principal text-claro font-h5-poppins rounded-lg hover:bg-opacity-80 transition-colors">
          Quem nós somos?
        </a>
      </div>

      {/* Mobile Menu Button - could be added later */}
      {/* <div className="md:hidden"> ... </div> */}
    </nav>
  );
};

export default Frame;
