import Modal from "./Modal";
import { useEffect, useState } from "react";
import Button from "./Button";
import useNewReleaseModal from "@/hooks/useNewReleaseModal";
import { Song } from "@/types/song";
import useNewSongModal from "@/hooks/useNewSongModal";

const NewReleaseModal = () => {
const newSongModal = useNewSongModal();

    const [tracks, setTracks] = useState<Song[]>([]);
    const [error, setError] = useState<string>('');


    const { onClose, isOpen } = useNewReleaseModal();
    const onChange = (open: boolean) => {
        if (!open) {
          onClose();
        }
      }

    const upload = async () => {
    }

    return ( 
        <Modal
            title="New release" 
            description="Upload tracks." 
            isOpen={isOpen} 
            onChange={onChange} 
        >
            <Button className="mb-8" onClick={newSongModal.onOpen}>+</Button>
            <Button onClick={upload}>Upload</Button>
            <div className="flex w-full py-4 justify-center items-center text-lg">
            <p className="text-red-800">{error}</p>
            </div>
        </Modal>
     );
}
 
export default NewReleaseModal;