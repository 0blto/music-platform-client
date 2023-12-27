"use client"

import Button from "@/components/Button";
import Header from "@/components/Header"
import MusicList from "@/components/MisicList";
import { SERVER_IMG } from "../config";
import useNewPlaylistModal from "@/hooks/useNewPlaylistModal";



const LikedAlbums = async () => {
    const newPlaylistModal = useNewPlaylistModal();
    return (
        <div
          className="
            rounded-lg 
            h-full 
            w-full 
            overflow-hidden 
            overflow-y-auto
          "
        >
          <Header>
            <div className="mb-2 flex flex-col gap-y-6">
              <h1 className="text-white text-3xl font-semibold">
                Your Playlists
              </h1>
            </div>
            <Button onClick={newPlaylistModal.onOpen}>Add playlist</Button>
            <div className="p-2 flex flex-wrap">
              
              <div className="m-2">
                <MusicList
                  image={`${SERVER_IMG}/holod.jpg`}
                  title="Liked Songs"
                  href="liked/songs"
                />
              </div>
            </div>
          </Header>
        </div>
      );
}

export default LikedAlbums;