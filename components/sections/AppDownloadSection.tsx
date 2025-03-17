import { Apple, SmartphoneIcon as Android } from "lucide-react"

export default function AppDownloadSection() {
  return (
    <div className="flex justify-end gap-4 my-8">
      <div className="flex items-center gap-2 bg-[#12294a] p-2 rounded-lg">
        <Apple className="w-6 h-6" />
        <div>
          <p className="text-xs text-[#90a2bd]">BetchApp App</p>
          <p className="text-xs">for Mac OS</p>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-[#12294a] p-2 rounded-lg">
        <Android className="w-6 h-6" />
        <div>
          <p className="text-xs text-[#90a2bd]">Android</p>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-[#12294a] p-2 rounded-lg">
        <Apple className="w-6 h-6" />
        <div>
          <p className="text-xs text-[#90a2bd]">iOS</p>
        </div>
      </div>
    </div>
  )
}

