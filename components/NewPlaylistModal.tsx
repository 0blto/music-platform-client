import Modal from "./Modal";
import { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { uploadPlaylist } from "@/actions/uploadPlaylist";
import useNewPlaylistModal from "@/hooks/useNewPlaylistModal";

const NewSongModal = () => {
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('');


    const { onClose, isOpen } = useNewPlaylistModal();
    const onChange = (open: boolean) => {
        if (!open) {
          onClose();
        }
      }

    const addPlaylist = async () => {
        uploadPlaylist({title: name});
        setName('');
        onClose();
    }

    return ( 
        <Modal
            title="New release" 
            description="Upload tracks." 
            isOpen={isOpen} 
            onChange={onChange} 
        >
            
            <h3 className="mb-1">Playlist title</h3>
            <Input
              className="mb-3"
              placeholder="title"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button onClick={addPlaylist}>Add</Button>
            <div className="flex w-full py-4 justify-center items-center text-lg">
            <p className="text-red-800">{error}</p>
            </div>
        </Modal>
     );
}
 
export default NewSongModal;