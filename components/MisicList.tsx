"use client"

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
    const onClick = () => {
        //load songs
    }
    return ( 
        <button
            onClick={onClick}
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
                <div 
                    className="
                    absolute 
                    transition 
                    opacity-0
                    drop-shadow-md 
                    left-[50%]
                    top-[50%]
                    translate-x-[-45%]
                    translate-y-[-50%]
                    group-hover:opacity-100 
                    hover:scale-110
                    p-[40px]
                    "
                >
                    <FaPlay size={35} className="text-black" />
                </div>
            </div>
            <p className="font-medium truncate py-2">
                {title}
            </p>
            <p className="text-sm text-neutral-400 truncate py-2">{name}</p>
            
        </button>
     );
}
 
export default MusicList;