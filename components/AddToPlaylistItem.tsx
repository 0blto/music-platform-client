import { linkPlaylistSong } from "@/actions/addToPlaylist";
import { SERVER_IMG } from "@/app/config";
import useAddToPlaylistModal from "@/hooks/useAddToPlaylistModal";
import { Playlist } from "@/types/playlist";
import Image from "next/image";

interface AddToPlaylistItemProps {
    playlist: Playlist;
}

const AddToPlaylistItem: React.FC<AddToPlaylistItemProps> = ({playlist}) => {
    const {songId} = useAddToPlaylistModal();
    const onClick = () => {
        linkPlaylistSong(playlist.id, songId);
    }

    return ( 
        <button
            onClick={onClick}
            className="
                relative 
                group 
                flex
                items-center 
                rounded-md 
                overflow-hidden 
                gap-x-4 
                bg-neutral-100/10 
                cursor-pointer 
                hover:bg-neutral-100/20 
                transition 
                my-2
                w-full
            "
        >
            <div
                className="
                    relative
                    min-h-[100px]
                    min-w-[100px]
                "
            >
                <Image
                    className="object-cover"
                    fill
                    src={`${SERVER_IMG}/holod.jpg`}
                    alt="Image"
                />
            </div>
            <p className="font-medium truncate py-2">
                {playlist.title}
            </p>
        </button>
     );
}
 
export default AddToPlaylistItem;