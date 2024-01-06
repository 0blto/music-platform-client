import Modal from "./Modal";
import { useEffect, useState } from "react";
import Button from "./Button";
import useNewReleaseModal from "@/hooks/useNewReleaseModal";
import { Song } from "@/types/song";
import useNewSongModal from "@/hooks/useNewSongModal";
import { uploadAlbum } from "@/actions/uploadAlbum";
import Input from "./Input";
import { linkAlbumSong } from "@/actions/linkAlbumSong";
import { getGenres } from "@/actions/getGenres";

const NewReleaseModal = () => {
const newSongModal = useNewSongModal();

    const [title, setTitle] = useState<string>('');
    const [error, setError] = useState<string>('');


    const { onClose, isOpen, genre, songs } = useNewReleaseModal();
    const onChange = (open: boolean) => {
        if (!open) {
          onClose();
        }
      }

    const upload = async () => {
      const albumId = await uploadAlbum({title: title, genreId: genre});
      songs.forEach(async songId => {
        console.log(linkAlbumSong(albumId, await songId));
      })
      setTitle('');
      onClose();
    }

    return ( 
        <Modal
            title="New release" 
            description="Upload tracks." 
            isOpen={isOpen} 
            onChange={onChange} 
        >
            <h3 className="mb-1">Album title</h3>
            <Input
              className="mb-3"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Button className="mb-8" onClick={newSongModal.onOpen}>+</Button>
            <Button onClick={() => upload()}>Upload</Button>
            <div className="flex w-full py-4 justify-center items-center text-lg">
            <p className="text-red-800">{error}</p>
            </div>
        </Modal>
     );
}
 
export default NewReleaseModal;