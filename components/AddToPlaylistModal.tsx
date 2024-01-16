import { getUserPlaylists } from "@/actions/getUserPlaylists";
import Modal from "./Modal";
import useAddToPlaylistModal from "@/hooks/useAddToPlaylistModal";
import usePlaylists from "@/hooks/usePlaylists";
import { Playlist } from "@/types/playlist";
import AddToPlaylistItem from "./AddToPlaylistItem";

const AddToPlaylistModal = () => {

    const { onClose, isOpen } = useAddToPlaylistModal();

    const {playlists} = usePlaylists();
    console.log(playlists)

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
          <div className="p-1 flex flex-col w-500">
            {playlists.map((playlist: Playlist) => (
                <div 
                  key={playlist.id.toString()} 
                  className="flex items-center gap-x-4 w-full"
                >
                  <div className="flex-1">
                    <AddToPlaylistItem playlist={playlist} />
                  </div>
                </div>
              ))}
          </div>
        </Modal>
     );
}
 
export default AddToPlaylistModal;