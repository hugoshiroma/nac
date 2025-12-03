import React, { JSX } from "react";
import { SocialIcons } from "../SocialIcons";

interface RodapProps {
  className?: string;
}

export const Rodap = ({ className }: RodapProps): JSX.Element => {
  return (
    <footer className={`w-full flex flex-col items-center py-14 bg-[#101B2B] bg-cover bg-center ${className}`} style={{ backgroundImage: "url('/bg 2 1.png')" }}>
      <div className="flex items-center gap-6">
        <SocialIcons platform="instagram" />
        <SocialIcons platform="x-twitter" />
        <SocialIcons platform="linked-in" />
      </div>
      {/* Optional: Add copyright or other footer text here */}
      <p className="text-claro/50 mt-4 text-sm">
        © {new Date().getFullYear()} NAC. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Rodap;