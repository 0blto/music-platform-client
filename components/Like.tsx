import { likeSomething } from "@/actions/likeSomething";
import useLiked from "@/hooks/useLiked";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GiBrokenHeart } from "react-icons/gi";

interface LikeProps {
    link: string;
    type: string;
    id: string;
}

const Like: React.FC<LikeProps> = ({link, type, id}) => {
    const router = useRouter();
    const liked = useLiked();
    const [isLiked, setIsLiked] = useState<boolean>(false);

    const {name} = useUser();

    useEffect(() => {
        if (name === '') return;
        if (type === 'playlist') {
            liked.playlists.forEach(playlist => {
                if (playlist.id === id) setIsLiked(true);
            })
        } else if (type === 'song') {
            liked.songs?.songs.forEach(song => {
                if (song.id === id) setIsLiked(true);
            })
        } else if (type === 'album') {
            liked.albums.forEach(album => {
                if (album.id === id) setIsLiked(true);
            })
        } else if (type === 'artist') {
            liked.artists.forEach(artist => {
                if (artist.id === id) setIsLiked(true);
            })
        }
    }, [])

    return ( 
        
        <div onClick={() => {likeSomething(link); setIsLiked(!isLiked)}} className='p-[2px] z-1000'>
            {isLiked 
            ? (<GiBrokenHeart className='text-cyan-500' size={20}/>)
            : (<GiBrokenHeart className='text-neutral-500' size={20}/>)
            }
        </div>
     );
}
 
export default Like;