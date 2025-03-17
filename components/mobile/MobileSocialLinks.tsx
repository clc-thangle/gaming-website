import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
} from "@/public/assets/icons";
import Link from "next/link";

export default function MobileSocialLinks() {
  return (
    <div className="my-6">
      <h3 className="text-sm text-center font-bold mb-[22px]">Follow Us</h3>
      <div className="flex gap-10 justify-center">
        <Link href="#" className="text-[#90a2bd]">
          <TelegramIcon className="w-[35px] h-[35px]" />
        </Link>
        <Link href="#" className="text-[#90a2bd]">
          <FacebookIcon className="w-[35px] h-[35px]" />
        </Link>
        <Link href="#" className="text-[#90a2bd]">
          <InstagramIcon className="w-[35px] h-[35px]" />
        </Link>
        <Link href="#" className="text-[#90a2bd]">
          <TwitterIcon className="w-[35px] h-[35px]" />
        </Link>
      </div>
    </div>
  );
}
