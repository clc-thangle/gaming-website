import Image from "next/image";
import { Button } from "../ui/button";
import { DATA_CATEGORIES } from "@/mockData/dataCategories";

export default function CategoryButtons() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-2 my-8">
      {DATA_CATEGORIES.map((category, index) => (
        <Button
          key={index}
          variant="outline"
          className="flex items-center bg-tech-dark-blue gap-2 border-[#1a3157] text-white hover:text-white hover:bg-tech-darker-blue cursor-pointer"
        >
          <Image
            src={category.icon}
            alt={category.label}
            className="w-4 h-4 text-[#ffcd00]"
            width={23}
            height={23}
          />
          <span>{category.label}</span>
        </Button>
      ))}
    </div>
  );
}
