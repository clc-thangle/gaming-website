import Header from "@/components/shared/Header";
import PromotionSection from "@/components/sections/PromotionSection";
import CategoryButtons from "@/components/sections/CategoryButtons";
import ProvidersSection from "@/components/sections/ProvidersSection";
import HelpCenterSection from "@/components/sections/HelpCenterSection";
import GamesSection from "@/components/mobile/MobileGamesSection";

export default function DesktopLayout() {
  return (
    <>
      <Header />
      <PromotionSection />
      <main className="container md:pt-10 md:px-10 mx-auto">
        <CategoryButtons />
        <GamesSection />
        <ProvidersSection />
      </main>
      <div className="bg-tech-darker-blue py-[60px]">
        <div className="container mx-auto md:px-10">
          <HelpCenterSection />
        </div>
      </div>
    </>
  );
}
