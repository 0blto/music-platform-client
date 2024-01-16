"use client"

import Button from "@/components/Button";
import Header from "@/components/Header"
import MusicList from "@/components/MisicList";
import { SERVER_API, SERVER_IMG } from "../config";
import useNewPlaylistModal from "@/hooks/useNewPlaylistModal";
import { getUserPlaylists } from "@/actions/getUserPlaylists";
import { Playlist } from "@/types/playlist";
import usePlaylists from "@/hooks/usePlaylists";
import { useEffect, useState } from "react";

export const revalidate = 0

const LikedAlbums = async () => {
    const newPlaylistModal = useNewPlaylistModal();
    const {playlists} = usePlaylists();
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
            {playlists.map((playlist: Playlist) => (
              <div className="m-2" key={playlist.id}>
                <MusicList
                  image={`${SERVER_IMG}/holod.jpg`}
                  title={playlist.title}
                  href={`${SERVER_API}/playlist/${playlist.id}`}
                  likeHref={`${SERVER_API}/playlist/likePlaylist/${playlist.id}`}
                  type='playlist'
                />
              </div>
            ))}
              
              
            </div>
          </Header>
        </div>
      );
}

export default LikedAlbums;