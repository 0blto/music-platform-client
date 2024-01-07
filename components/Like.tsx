import useUser from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface LikeProps {
    api: string;
    id: string;
}

const Like = () => {
    const router = useRouter();

    const [isLiked, setIsLiked] = useState<boolean>(false);

    const {name} = useUser();

    useEffect(() => {
        if (name === '') return;
        
    }, [])

    return ( 
        <div></div>
     );
}
 
export default Like;