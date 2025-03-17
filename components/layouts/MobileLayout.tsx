import MobileHeader from "@/components/shared/MobileHeader";
import MobileGamesSection from "@/components/mobile/MobileGamesSection";
import MobileProvidersSection from "@/components/mobile/MobileProvidersSection";
import MobileAccordionMenu from "@/components/mobile/MobileAccordionMenu";
import MobileSocialLinks from "@/components/mobile/MobileSocialLinks";
import MobileHelpCenter from "@/components/mobile/MobileHelpCenter";
import MobileAppDownload from "@/components/mobile/MobileAppDownload";
import MobilePromotionCard from "../mobile/MobilePromotionCard";
import { CONTENTS } from "@/constant/promotion";
import { MobileActionButtons } from "../mobile/MobileActionButtons";

export default function MobileLayout() {
  return (
    <>
      <MobileHeader />
      <main className="p-4">
        <MobilePromotionCard contents={CONTENTS} />
        <MobileActionButtons />
        <MobileGamesSection />
        <MobileProvidersSection />
        <MobileAccordionMenu />
        <MobileSocialLinks />
        <MobileHelpCenter />
        <MobileAppDownload />
      </main>
    </>
  );
}
