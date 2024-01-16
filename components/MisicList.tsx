"use client"

import { getAlbumSongs } from "@/actions/getAlbumSongs";
import { getSongAuthor } from "@/actions/getSongAuthor";
import usePlayer from "@/hooks/usePlayer";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import Like from "./Like";
import { getLikedSongs } from "@/actions/getLikedSongs";
import useLiked from "@/hooks/useLiked";

interface MusicListProps {
    image: string;
    name?: string;
    title: string;
    href: string;
    likeHref?: string;
    type: string;
}

const MusicList: React.FC<MusicListProps> = ({
    image,
    name,
    title,
    href,
    likeHref,
    type
}) => {
    const id = `${href.split('/').pop()}`;
    console.log(id);
    const liked = useLiked();
    const { setAuthors, setListTitle, setTitles, setIds } = usePlayer();
    const onClick = async () => {
        const data = title === 'Liked Songs' ? liked.songs : await getAlbumSongs(href);
        setListTitle(`${data?.info.title}`);
        const titlesArray: string[] = [];
        data?.songs.forEach(song => {titlesArray.push(song.title)});
        setTitles(titlesArray);
        const idsArray: string[] = [];
        data?.songs.forEach(song => {idsArray.push(song.id)});
        setIds(idsArray);
        const artistsArray: string[] = [];
        data?.songs.forEach(async (song) => {
            artistsArray.push(await getSongAuthor(song.id));
        });
        setTimeout(() => setAuthors(artistsArray), 100);
    }

    return ( 
        <button
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
            <p className="text-sm text-neutral-400 truncate py-2">{name}</p>
            {title !== 'Liked Songs'
                ? (
                    <div 
                        onClick={() => {onClick()}}
                        className="
                        absolute 
                        transition 
                        opacity-0
                        drop-shadow-md 
                        left-[-25px]
                        bottom-[-25px]
                        group-hover:opacity-100 
                        hover:scale-110
                        p-[40px]
                        "
                    >
                    <Like link={`${likeHref}`} type={type} id={id} />
                </div>
                )
                : (<div></div>)
            }
            
        </button>
     );
}
 
export default MusicList;