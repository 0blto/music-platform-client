"use client"

import { getAlbumSongs } from "@/actions/getAlbumSongs";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface MusicListProps {
    image: string;
    name?: string;
    title: string;
    href: string;
}

const MusicList: React.FC<MusicListProps> = ({
    image,
    name,
    title,
    href
}) => {
    const onClick = async () => {
        const data = await getAlbumSongs(href);
        console.log(data);
    }

    return ( 
        <button
            onClick={() => onClick()}
            className="
                relative 
                group 
                flex 
                flex-col
                items-center 
                rounded-md 
                overflow-hidden 
                gap-x-4 
                bg-neutral-100/10 
                cursor-pointer 
                hover:bg-neutral-100/20 
                transition 
                my-2
                w-[200px]
                pb-5
            "
        >
            <div
                className="
                    relative
                    min-h-[200px]
                    min-w-[200px]
                "
            >
                <Image
                    className="object-cover"
                    fill
                    src={image}
                    alt="Image"
                />
            </div>
            <p className="font-medium truncate py-2">
                {title}
            </p>
            <p className="text-sm text-neutral-400 truncate py-2">{name}</p>
            <div 
                    onClick={() => {onClick()}}
                    className="
                    absolute 
                    transition 
                    opacity-0
                    drop-shadow-md 
                    right-[-25px]
                    bottom-[-25px]
                    group-hover:opacity-100 
                    hover:scale-110
                    p-[40px]
                    "
                >
                <FaPlay size={25} className="text-neutral-200" />
            </div>
        </button>
     );
}
 
export default MusicList;