import useAddToPlaylistModal from "@/hooks/useAddToPlaylistModal";
import { IoIosAdd } from "react-icons/io";

const AddToPlaylist = () => {
    const addToPlaylist = useAddToPlaylistModal();

    return ( 
        <div onClick={() => addToPlaylist.onOpen()} className="z-1000">
            <IoIosAdd size={30}/>
        </div>
     );
}
 
export default AddToPlaylist;