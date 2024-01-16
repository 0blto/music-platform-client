"use client";

import Image from "next/image";

import usePlayer from "@/hooks/usePlayer";
import { SERVER_IMG } from "@/app/config";

interface MediaItemProps {
  title: string;
  author: string;
  onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({
  title,
  author,
  onClick,
}) => {
  const player = usePlayer();
  const imageUrl = `${SERVER_IMG}/holod.jpg`;


  return ( 
    <div
      className="
        flex 
        items-center 
        gap-x-3 
        cursor-pointer 
        hover:bg-neutral-800/50 
        w-full 
        p-2 
        rounded-md
      "
    >
      <div 
        className="
          relative 
          rounded-md 
          min-h-[48px] 
          min-w-[48px] 
          overflow-hidden
        "
      >
        <Image
          fill
          src={imageUrl || "/images/music-placeholder.png"}
          alt="MediaItem"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{title}</p>
        <p className="text-neutral-400 text-sm truncate">
          By {author}
        </p>
      </div>
    </div>
  );
}
 
export default MediaItem;