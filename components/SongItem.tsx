"use client"

import { FaPlay } from "react-icons/fa";
import { GiBrokenHeart } from "react-icons/gi";
import AddToPlaylist from "./AddToPlaylist";
import Like from "./Like";
import usePlayer from "@/hooks/usePlayer";
import { SERVER_API } from "@/app/config";

interface SongItemProps {
    title: string;
    artist: string;
    songId: string;
}

const SongItem: React.FC<SongItemProps> = ({title, artist, songId}) => {
    const player = usePlayer();
    const onClick = () => {
        const currentIndex = player.ids.findIndex((id) => id === songId);
        player.setAuthor(player.authors[currentIndex]);
        player.setTitle(player.titles[currentIndex]);
        player.setId(player.ids[currentIndex]);
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
            <div className="flex justify-center items-center">
                <Like link={`${SERVER_API}/song/likeSong/${songId}`} type={'song'} id={songId} />
                <AddToPlaylist songId={songId}/>
            </div>
        </button>
     );
}
 
export default SongItem;