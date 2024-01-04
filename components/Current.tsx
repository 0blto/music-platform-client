"use client"

import usePlayer from "@/hooks/usePlayer";
import { TbPlaylist } from "react-icons/tb";

const Current = () => {

    const {listTitle, titles, authors} = usePlayer();
    if (listTitle) {
        return ( 
            <div className="flex flex-col">
                <div className="flex items-center justify-between px-5 py-4 sticky top-0 left-0 backdrop-blur-md">
                    <div className="inline-flex items-center gap-x-2">
                        <TbPlaylist className="text-neutral-400" size={26} />
                        <p className="text-neutral-400 font-medium text-md">
                            {listTitle}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2 mt-2 px-3 h-full">
                    
                </div>
            </div>
         );
    } else {
        return (
            <div></div>
        );
    }
    
}
 
export default Current;