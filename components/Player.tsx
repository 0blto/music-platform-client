"use client";

import usePlayer from "@/hooks/usePlayer";



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
    </div>
  );
}

export default Player;