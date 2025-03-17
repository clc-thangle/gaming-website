import Android from "@/public/assets/icons/android";
import Ios from "@/public/assets/icons/ios";

export default function MobileAppDownload() {
  return (
    <div className="grid grid-cols-2 gap-2 mt-4 mb-10">
      <div className="flex items-center justify-center gap-2 bg-[#12294a] p-2 rounded-lg">
        <Android />
        <div>
          <p className="text-xs">BetchApp App</p>
          <p className="text-[10px] text-[#90a2bd]">for Android</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 bg-[#12294a] p-2 rounded-lg">
        <Ios />
        <div>
          <p className="text-xs">BetchApp App</p>
          <p className="text-[10px] text-[#90a2bd]">for iOS</p>
        </div>
      </div>
    </div>
  );
}
