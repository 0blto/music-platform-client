"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import Like from "./Like";

interface ArtistItemProps {
    image: string;
    name: string;
    likes: number;
    href: string;
    likeHref: string;
}

const ArtistItem: React.FC<ArtistItemProps> = ({
    image,
    name,
    likes,
    href,
    likeHref
}) => {
    const router = useRouter();
    const onClick = () => {
        //add auth to push
        router.push(href);
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
                pb-3
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
                
                    onClick={onClick}
                    className="object-cover"
                    fill
                    src={image}
                    alt="Image"
                />
            </div>
            <p className="font-medium truncate py-2">
                {name}
            </p>
            <div 
                    
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
                <Like link={`${likeHref}`} type={'artist'} id={'1'} />
            </div>
        </button>
     );
}
 

export default ArtistItem;