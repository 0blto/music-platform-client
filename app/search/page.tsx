import Header from "@/components/Header"
import SearchInput from "@/components/SearchInput"
import SearchContent from "./components/SearchContent"
import {getPlaylistsByTitle} from "@/actions/getPlaylistsByTitle"
import { getAlbumsByTitle } from "@/actions/getAlbumsByTitle"
import { getArtistsByTitle } from "@/actions/getArtistsByTitle"

export const revalidate = 0


interface SearchProps {
    searchParams: {
        query: string
    }
}

const Search = async ({ searchParams }: SearchProps) => {
    const playlists = await getPlaylistsByTitle(searchParams.query);
    const albums = await getAlbumsByTitle(searchParams.query);
    const artists = await getArtistsByTitle(searchParams.query);
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
                Search
              </h1>
              <SearchInput />
            </div>
          </Header>
          <SearchContent playlists={playlists} albums={albums} artists={artists}/>
        </div>
      );
}

export default Search;