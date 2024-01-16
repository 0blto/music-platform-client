'use client'

import { SERVER_API, SERVER_IMG } from "@/app/config";
import Header from "@/components/Header"
import MusicList from "@/components/MisicList";
import useLiked from "@/hooks/useLiked";
import { AlbumView } from "@/types/album";



const LikedAlbums = async () => {
    const found = []
    const liked = useLiked();
    console.log(liked.albums)
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
                Liked Albums
              </h1>
            </div>
            <div className="p-2 flex flex-wrap">
            {liked.albums.map((album: AlbumView) => (
              <div 
                key={album.id.toString()} 
                className="flex items-center gap-x-4 w-full"
              >
                <div className="flex-1">
                  <MusicList 
                    image={`${SERVER_IMG}/holod.jpg`}
                    title={album.title.toString()}
                    href={`${SERVER_API}/album/getSongs/${album.id}`}
                    likeHref={`${SERVER_API}/album/likeAlbum/${album.id}`}
                    type='album'
                  />
                </div>
              </div>
            ))}
              
            </div>
          </Header>
        </div>
      );
}

export default LikedAlbums;