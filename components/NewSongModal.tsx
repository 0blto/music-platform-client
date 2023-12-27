import Modal from "./Modal";
import { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import useNewSongModal from "@/hooks/useNewSongModal";
import useNewReleaseModal from "@/hooks/useNewReleaseModal";
import { uploadSong } from "@/actions/uploadSong";

const NewSongModal = () => {
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('');

    const releaseModal = useNewReleaseModal();


    const { onClose, isOpen } = useNewSongModal();
    const onChange = (open: boolean) => {
        if (!open) {
          onClose();
        }
      }

    const addSong = async () => {
        uploadSong({title: name, genreId: 'dc00501c-aa37-4d92-91bd-477fae2fb670'});
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
            
            <h3 className="mb-1">Title</h3>
            <Input
              className="mb-3"
              placeholder="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button onClick={addSong}>Add</Button>
            <div className="flex w-full py-4 justify-center items-center text-lg">
            <p className="text-red-800">{error}</p>
            </div>
        </Modal>
     );
}
 
export default NewSongModal;