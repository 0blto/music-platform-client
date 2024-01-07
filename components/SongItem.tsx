"use client"

import { FaPlay } from "react-icons/fa";
import { GiBrokenHeart } from "react-icons/gi";
import AddToPlaylist from "./AddToPlaylist";

interface SongItemProps {
    title: string;
    artist: string;
    songId: string;
}

const SongItem: React.FC<SongItemProps> = ({title, artist, songId}) => {
    const onClick = () => {
        //later
    }
    return ( 
        <button
            onClick={onClick}
            className="
                flex 
                flex-col
                items-center
                rounded-md 
                overflow-hidden 
                cursor-pointer 
                hover:bg-neutral-100/10 
                hover:scale-105 
                transition 
                my-[0.5px]
                px-4
                py-2
            "
        >
            <div className="flex justify-start items-start w-full">
                <div
                    className="
                        mr-3 
                        hover:scale-125 
                        transition 
                        p-2
                        flex
                        items-center
                        justify-center
                    "
                >
                    <FaPlay size={10}/>
                </div>
                
                <p className="font-medium truncate mr-5">
                    {title}
                </p>
                <p className="text-sm font-small truncate text-neutral-400">
                    {artist}
                </p>
            </div>
            <div className="flex">
                <GiBrokenHeart/>
                <AddToPlaylist/>
            </div>
        </button>
     );
}
 
export default SongItem;