import { Button } from "@/components/ui/button";
import { DATA_PROVIDERS } from "@/mockData/dataProviders";
import { ViewMore } from "@/public/assets/icons";
import Image from "next/image";

export default function MobileProvidersSection() {
  return (
    <div className="mb-3 md:mb-10">
      <div className="flex justify-between items-center md:mb-4 md:px-0">
        <h2 className="text-white text-[14px] md:text-[32px] font-medium uppercase md:capitalize">
          All Providers
        </h2>
        <Button variant="ghost" size="sm" className="text-white p-0 md:p-2">
          <span className="hidden md:inline mr-2">SEE ALL</span>
          <ViewMore className="size-[18px]" />
        </Button>
      </div>
      <div className="flex overflow-x-auto justify-start md:justify-center py-3 md:py-4 md:px-0 gap-3 md:gap-4 hide-scrollbar">
        {DATA_PROVIDERS.map((provider, index) => (
          <div
            key={index}
            className="flex gap-0 bg-tech-darker-blue rounded-[8px] flex-col items-center justify-center w-[120px] min-w-[120px] md:w-[156px] md:min-w-[156px] cursor-pointer"
          >
            <Image
              src={provider.view.src}
              alt={provider.name}
              width={120}
              height={120}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
