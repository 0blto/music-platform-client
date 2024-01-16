"use client";

import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";



const Player = () => {
  const player = usePlayer();

  if (!player.activeId) {
    return null;
  }

  return (
    <div 
      className="
        fixed 
        bottom-0 
        bg-black 
        w-full 
        py-2 
        h-[80px] 
        px-4
      "
    >
      <PlayerContent title={player.title} author={player.author} />
    </div>
  );
}

export default Player;