"use client";

import { Button } from "../ui/button";
import { MenuBurger, LogoIcon } from "@/public/assets/icons";

export default function MobileHeader() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-[#1a3157]">
      <div className="flex items-center gap-2">
        <MenuBurger className="size-[24px]" />
        <LogoIcon className="w-10 h-[18px]" />
      </div>
      <div className="flex items-center gap-1 md:gap-2">
        <Button
          variant="outline"
          className="text-white bg-tech-darker-blue border-none text-sm py-1 px-3 h-[34px] transition-all duration-300 hover:bg-tech-darker-blue/50"
          size="sm"
        >
          LOGIN
        </Button>
        <Button
          className="text-white text-sm py-1 px-3 h-[34px] transition-all duration-300 bg-tech-green hover:bg-tech-darker-green"
          size="sm"
        >
          REGISTRATION
        </Button>
      </div>
    </header>
  );
}
