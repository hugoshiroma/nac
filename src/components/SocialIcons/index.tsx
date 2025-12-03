/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface SocialIconsProps {
  platform: "instagram" | "x-twitter" | "linked-in";
  color?: any;
  className?: any;
  platformInstagram?: string;
  platformXTwitter?: string;
  platformLinkedin?: string;
}

export const SocialIcons = ({
  platform,
  color,
  className,
  platformInstagram = "https://c.animaapp.com/p5Mjlt9W/img/platform-instagram--color-negative.svg",
  platformXTwitter = "https://c.animaapp.com/p5Mjlt9W/img/platform-x--twitter---color-negative.svg",
  platformLinkedin = "https://c.animaapp.com/p5Mjlt9W/img/platform-linkedin--color-negative.svg",
}: SocialIconsProps) => {
  return (
    <img
      className={`w-12 h-12 ${className}`}
      alt={`Platform ${platform}`}
      src={
        platform === "instagram"
          ? platformInstagram
          : platform === "x-twitter"
            ? platformXTwitter
            : platformLinkedin
      }
    />
  );
};

export default SocialIcons;
