import Link from "next/link";
import { Button } from "../ui/button";
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
} from "@/public/assets/icons";
import { Images } from "@/public/assets/imgs";

export default function HelpCenterSection() {
  return (
    <div className="bg-tech-grey flex justify-between">
      <div>
        <h3 className="text-2xl font-medium mb-4">Help Center</h3>
        <p className="text-sm text-nepal mb-4">If you have any questions?</p>
        <Button className="font-normal bg-[#3555FF] hover:bg-[#3555FF] py-[12.5px] text-[13px] leading-[14px] tracking-[0.39px] px-[54px] text-white">
          GET ANSWERS
        </Button>
        <div className="flex justify-between mt-10">
          <Link
            href="#"
            className="rounded-full  text-white transition-transform hover:scale-110"
          >
            <TelegramIcon className="h-[30px] w-[30px]" />
          </Link>
          <Link
            href="#"
            className="rounded-full  text-white transition-transform hover:scale-110"
          >
            <FacebookIcon className="h-[30px] w-[30px]" />
          </Link>
          <Link
            href="#"
            className="rounded-full  text-white transition-transform hover:scale-110"
          >
            <InstagramIcon className="h-[30px] w-[30px]" />
          </Link>
          <Link
            href="#"
            className="rounded-full  text-white transition-transform hover:scale-110"
          >
            <TwitterIcon className="h-[30px] w-[30px]" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="text-lg font-bold">Games</h3>

        <Link href="#" className="text-sm text-nepal hover:text-white w-fit">
          Game 1
        </Link>

        <Link href="#" className="text-sm text-nepal hover:text-white w-fit">
          Game 2
        </Link>

        <Link href="#" className="text-sm text-nepal hover:text-white w-fit">
          Game 3
        </Link>

        <Link href="#" className="text-sm text-nepal hover:text-white w-fit">
          Game 14
        </Link>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="text-lg font-bold">About</h3>
        <Link href="#" className="text-sm text-nepal hover:text-white w-fit">
          About Us
        </Link>

        <Link href="#" className="text-sm text-nepal hover:text-white w-fit">
          Promotions
        </Link>

        <Link href="#" className="text-sm text-nepal hover:text-white w-fit">
          VIP
        </Link>

        <Link href="#" className="text-sm text-nepal hover:text- w-fit">
          Help Center
        </Link>

        <Link href="#" className="text-sm text-nepal hover:text- w-fit">
          Awards & Certificates
        </Link>

        <Link href="#" className="text-sm text-nepal hover:text- w-fit">
          App
        </Link>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="text-lg font-bold">Legal Information</h3>

        <Link href="#" className="text-sm text-nepal hover:text- w-fit">
          General Terms & Conditions
        </Link>

        <Link href="#" className="text-sm text-nepal hover:text- w-fit">
          Responsible Gaming Policy
        </Link>

        <Link href="#" className="text-sm text-nepal hover:text- w-fit">
          Sports Betting Rules
        </Link>

        <Link href="#" className="text-sm text-nepal hover:text- w-fit">
          Privacy and Cookies Policy
        </Link>

        <Link href="#" className="text-sm text-nepal hover:text- w-fit">
          Payment Methods
        </Link>

        <Link href="#" className="text-sm text-nepal hover:text- w-fit">
          Limits
        </Link>
      </div>

      <div className="w-[160px]">
        <div className="flex items-center bg-tech-azure p-2 rounded-lg">
          <img src={Images.ios.src} alt="" />
          <div>
            <p className="text-[15px] leading-[21px] font-medium">
              Bluechip App for Mac OS
            </p>
          </div>
        </div>
        <div className="mt-2 flex gap-2">
          <div className="flex items-center flex-col bg-tech-azure px-[17px] pb-[21px] rounded-lg w-[76px] h-[63px]">
            <img src={Images.android.src} alt="" />
            <div>
              <p className="text-[15px] text-nepal leading-[21px]">Android</p>
            </div>
          </div>
          <div className="flex items-center flex-col bg-tech-azure px-[17px] pb-[21px] rounded-lg w-[76px] h-[63px]">
            <img src={Images.ios.src} alt="" />
            <div>
              <p className="text-[15px] text-nepal leading-[21px]">iOS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
