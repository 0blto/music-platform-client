'use client'

import { SERVER_API, SERVER_IMG } from "@/app/config";
import ArtistItem from "@/components/ArtistItem";
import Header from "@/components/Header"
import useLiked from "@/hooks/useLiked";
import { ArtistView } from "@/types/artist";



const LikedArtists = async () => {
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
                Liked Artists
              </h1>
            </div>
            <div className="p-2 flex flex-wrap">
            {liked.artists.map((artist: ArtistView) => (
              <div 
                key={artist.id.toString()} 
                className="flex items-center gap-x-4 w-full"
              >
                <div className="flex-1 m-2">
                  <ArtistItem 
                    image={`${SERVER_IMG}/holod.jpg`}
                    name={artist.nickname.toString()}
                    href={`/artists/${artist.id}`} likes={artist.likesCount}
                    likeHref={`${SERVER_API}/artist/likeArtist/${artist.id}`}
                  />
                </div>
              </div>
            ))}
            </div>
          </Header>
        </div>
      );
}

export default LikedArtists;