import Image from "next/image";
import { HotIcon, NewIcon, ViewMore } from "@/public/assets/icons";
import { DATA_GAMES } from "@/mockData/dataGames";
import { Button } from "../ui/button";

export default function MobileGamesSection() {
  const renderIcon = (status: string) => {
    switch (status) {
      case "HOT":
        return <HotIcon />;
      case "NEW":
        return <NewIcon />;
      default:
        return null;
    }
  };

  return (
    <div className="my-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-white text-[14px] md:text-[32px] font-medium uppercase md:capitalize">
          Exclusive Games
        </h2>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="p-0 text-[#cad3e1] text-xs hidden md:block"
          >
            SEE ALL
          </Button>
          <ViewMore className="size-[18px]" />
        </div>
      </div>
      <div className="flex overflow-x-auto py-3 md:py-4 px-4 md:px-0 gap-3 md:gap-4 snap-x snap-mandatory hide-scrollbar">
        {DATA_GAMES.map((game, index) => (
          <div
            key={index}
            className="game-card relative flex-shrink-0 flex-grow-0 md:w-[156px] md:min-w-[156px] w-[120px] min-w-[120px] h-[160px] md:h-[210px] snap-start overflow-visible rounded-[8px]"
          >
            <div className="absolute top-[8px] left-[-3px]">
              {renderIcon(game.status || "")}
            </div>
            <Image
              src={game.view.src}
              alt={`Game ${index + 1}`}
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
