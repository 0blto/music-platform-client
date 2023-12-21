"use client"

import { TbPlaylist } from "react-icons/tb"
import SongItem from "./SongItem";

interface CurrentProps {
    isEmpty: boolean;
    name?: string;
}

const Current: React.FC<CurrentProps> = ({isEmpty, name}) => {

    return ( 
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2">
                    <TbPlaylist className="text-neutral-400" size={26} />
                    <p className="text-neutral-400 font-medium text-md">
                        {isEmpty ? name : ''}
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-y-2 mt-4 px-3">
                <SongItem/>
                <SongItem/>
            </div>
        </div>
     );
}
 
export default Current;