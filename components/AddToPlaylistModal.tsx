import { getUserPlaylists } from "@/actions/getUserPlaylists";
import Modal from "./Modal";
import useAddToPlaylistModal from "@/hooks/useAddToPlaylistModal";
import usePlaylists from "@/hooks/usePlaylists";

const AddToPlaylistModal = () => {

    const { onClose, isOpen } = useAddToPlaylistModal();
    const onChange = (open: boolean) => {
        if (!open) {
          onClose();
        }
      }


    return ( 
        <Modal
            title="Add song to playlist" 
            description="Choose matching playlist." 
            isOpen={isOpen} 
            onChange={onChange} 
        >
            Hi
        </Modal>
     );
}
 
export default AddToPlaylistModal;