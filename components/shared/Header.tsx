import Link from "next/link";
import { Button } from "../ui/button";
import { LogoIcon } from "@/public/assets/icons";
import { SearchIcon } from "@/public/assets/icons";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-[240px] border-b border-[#1a3157]">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-[50px]">
          <LogoIcon />
          <SearchIcon className="w-5 h-5" />
        </div>
        <nav className="flex items-center gap-6">
          <Link href="#" className="text-sm hover:text-[#ff0960]">
            HOME
          </Link>
          <Link href="#" className="text-sm hover:text-[#ff0960]">
            GAME
          </Link>
          <Link href="#" className="text-sm hover:text-[#ff0960]">
            INFO
          </Link>
          <Link href="#" className="text-sm hover:text-[#ff0960]">
            NEWS
          </Link>
          <Link href="#" className="text-sm hover:text-[#ff0960]">
            PROMOTIONS
          </Link>
          <Link href="#" className="text-sm hover:text-[#ff0960]">
            VIP
          </Link>
        </nav>
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
