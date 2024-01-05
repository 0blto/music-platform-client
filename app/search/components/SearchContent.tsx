"use client";

import { SERVER_API, SERVER_IMG } from "@/app/config";
import ArtistItem from "@/components/ArtistItem";
import MusicList from "@/components/MisicList";
import { AlbumView } from "@/types/album";
import { ArtistView } from "@/types/artist";
import { Playlist } from "@/types/playlist";

interface SearchContentProps {
  playlists: Playlist[];
  albums: AlbumView[];
  artists: ArtistView[];
}

const SearchContent: React.FC<SearchContentProps> = ({
  playlists, albums, artists
}) => {

  if (playlists.length === 0 && albums.length === 0) {
    return (
      <div 
        className="
          flex 
          flex-col 
          gap-y-2 
          w-full 
          px-6 
          text-neutral-400
        "
      >
        No songs found.
      </div>
    )
  }

  return (
      <div>
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">
            Playlists
          </h1>
        </div>
        <div className="p-2 flex flex-wrap">
          {playlists.map((playlist: Playlist) => (
            <div 
              key={playlist.id.toString()} 
              className="flex items-center gap-x-4 w-full"
            >
              <div className="flex-1">
                <MusicList 
                  image={`${SERVER_IMG}/holod.jpg`}
                  title={playlist.title.toString()}
                  href={`${SERVER_API}/playlist/${playlist.id}`}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">
            Albums
          </h1>
        </div>
        <div className="p-2 flex flex-wrap">
          {albums.map((album: AlbumView) => (
            <div 
              key={album.id.toString()} 
              className="flex items-center gap-x-4 w-full"
            >
              <div className="flex-1">
                <MusicList 
                  image={`${SERVER_IMG}/holod.jpg`}
                  title={album.title.toString()}
                  href={`${SERVER_API}/album/getSongs/${album.id}`}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">
            Artists
          </h1>
        </div>
        <div className="p-2 flex flex-wrap">
          {artists.map((artist: ArtistView) => (
            <div 
              key={artist.id.toString()} 
              className="flex items-center gap-x-4 w-full"
            >
              <div className="flex-1">
                <ArtistItem 
                  image={`${SERVER_IMG}/holod.jpg`}
                  name={artist.nickname.toString()}
                  href={`/artists/${artist.id}`} likes={artist.likesCount}                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}
 
export default SearchContent;