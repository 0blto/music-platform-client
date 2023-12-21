"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface ArtistItemProps {
    image: string;
    name: string;
    likes: number;
    href: string;
}

const ArtistItem: React.FC<ArtistItemProps> = ({
    image,
    name,
    likes,
    href
}) => {
    const router = useRouter();
    const onClick = () => {
        //add auth to push
        router.push(href);
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
            </div>
            <p className="font-medium truncate py-2">
                {name}
            </p>
            <p className="text-sm text-neutral-400 truncate py-2">Likes: {likes}</p>
            
        </button>
     );
}
 

export default ArtistItem;