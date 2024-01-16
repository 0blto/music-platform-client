import { likeSomething } from "@/actions/likeSomething";
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

    const [isLiked, setIsLiked] = useState<boolean>(false);

    const {name} = useUser();

    useEffect(() => {
        if (name === '') return;
        
    }, [])

    return ( 
        <div onClick={() => likeSomething(link)} className="z-1000 p-[2px]">
            <GiBrokenHeart size={20}/>
        </div>
     );
}
 
export default Like;