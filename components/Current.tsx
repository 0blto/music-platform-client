"use client"

import { TbPlaylist } from "react-icons/tb"
import SongItem from "./SongItem";

interface CurrentProps {
    name?: string;
}

const Current: React.FC<CurrentProps> = ({name}) => {

    return ( 
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 sticky top-0 left-0 backdrop-blur-md">
                <div className="inline-flex items-center gap-x-2">
                    <TbPlaylist className="text-neutral-400" size={26} />
                    <p className="text-neutral-400 font-medium text-md">
                        {name}
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-y-2 mt-2 px-3 h-full">
                <SongItem/>
                <SongItem/>
                <SongItem/>
                <SongItem/>
                <SongItem/>
                <SongItem/>
                <SongItem/>
                <SongItem/>
                <SongItem/>
                <SongItem/>
                <SongItem/>
                <SongItem/>
                <SongItem/>
                <SongItem/>
                <SongItem/>
                <SongItem/>
                <SongItem/>
                <SongItem/>
                <SongItem/>
                <SongItem/>
                <SongItem/>
                <SongItem/>
            </div>
        </div>
     );
}
 
export default Current;