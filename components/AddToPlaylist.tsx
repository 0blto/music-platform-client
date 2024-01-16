import useAddToPlaylistModal from "@/hooks/useAddToPlaylistModal";
import { IoIosAdd } from "react-icons/io";

interface AddToPlaylistProps {
    songId: string;
}

const AddToPlaylist: React.FC<AddToPlaylistProps> = ({songId}) => {
    const addToPlaylist = useAddToPlaylistModal();

    return ( 
        <div onClick={() => {addToPlaylist.setSongId(songId);addToPlaylist.onOpen()}} className="z-1000 p-[2px]">
            <IoIosAdd size={30}/>
        </div>
     );
}
 
export default AddToPlaylist;