import React, { JSX } from "react";
import { SocialIcons } from "../SocialIcons";

interface RodapProps {
  className?: string;
}

export const Rodap = ({ className }: RodapProps): JSX.Element => {
  return (
    <footer className={`w-full flex flex-col items-center py-8 bg-[#101B2B] ${className}`}>
      <div className="flex items-center gap-6">
        <SocialIcons platform="instagram" />
        <SocialIcons platform="x-twitter" />
        <SocialIcons platform="linked-in" />
      </div>
      {/* Optional: Add copyright or other footer text here */}
      <p className="text-claro/50 mt-4 text-sm">
        © {new Date().getFullYear()} Lavinia. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Rodap;
