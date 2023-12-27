"use client";

import { SERVER_API, SERVER_IMG } from "@/app/config";
import MusicList from "@/components/MisicList";
import { Playlist } from "@/types/playlist";

interface SearchContentProps {
  playlists: Playlist[];
}

const SearchContent: React.FC<SearchContentProps> = ({
  playlists
}) => {

  if (playlists.length === 0) {
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
    <div className="flex flex-col gap-y-2 w-full px-6">
      {playlists.map((playlist: Playlist) => (
        <div 
          key={playlist.id.toString()} 
          className="flex items-center gap-x-4 w-full"
        >
          <div className="flex-1">
            <MusicList 
              image={`${SERVER_IMG}/holod.jpg`}
              title={playlist.title.toString()}
              href="href"
            />
          </div>
        </div>
      ))}
    </div>
    )
}
 
export default SearchContent;