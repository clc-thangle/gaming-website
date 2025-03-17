import DesktopLayout from "@/components/layouts/DesktopLayout";
import MobileLayout from "@/components/layouts/MobileLayout";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#03193a] text-white">
      {/* Desktop View */}
      <div className="hidden md:block">
        <DesktopLayout />
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <MobileLayout />
      </div>
    </div>
  );
}
