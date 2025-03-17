import { Button } from "../ui/button";
import { ViewMore } from "@/public/assets/icons";
import { DATA_PROVIDERS } from "@/mockData/dataProviders";

export default function ProvidersSection() {
  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[32px] font-medium">All Providers</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="w-[53px] h-[21px] text-[#cad3e1] text-xs"
          >
            SEE ALL
          </Button>
          <ViewMore className="size-[18px]" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4 px-[54px]">
        {DATA_PROVIDERS.map((provider, index) => (
          <div key={index}>
            <img src={provider.view.src} alt={`Provider ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
