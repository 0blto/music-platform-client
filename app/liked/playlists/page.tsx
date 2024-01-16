'use client'
import { SERVER_API, SERVER_IMG } from "@/app/config";
import Header from "@/components/Header"
import MusicList from "@/components/MisicList";
import useLiked from "@/hooks/useLiked";
import { Playlist } from "@/types/playlist";



const LikedPlaylists = async () => {
    const found = []
    const liked = useLiked();
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
                Liked Playlists
              </h1>
            </div>
            <div className="p-2 flex flex-wrap">
              {liked.playlists.map((playlist: Playlist) => (
                <div 
                  key={playlist.id.toString()} 
                  className="flex items-center gap-x-4 w-full"
                >
                  <div className="flex-1">
                    <MusicList 
                      image={`${SERVER_IMG}/holod.jpg`}
                      title={playlist.title.toString()}
                      href={`${SERVER_API}/album/getSongs/${playlist.id}`}
                      likeHref={`${SERVER_API}/album/likeAlbum/${playlist.id}`}
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

export default LikedPlaylists;