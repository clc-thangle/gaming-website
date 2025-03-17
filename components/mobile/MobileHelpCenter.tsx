import { Button } from "@/components/ui/button";

export default function MobileHelpCenter() {
  return (
    <div className="bg-[#12294a] rounded-lg p-4 mt-6 mt-20">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-white text-base font-medium">Follow Us</h3>
          <p className="text-nepal text-xs">If you have any questions?</p>
        </div>
        <Button className="bg-tech-blue hover:bg-blue-700 text-white text-sm w-[116px] h-[34px] rounded-[10px]">
          GET ANSWERS
        </Button>
      </div>
    </div>
  );
}
