import Header from '@/components/Header'
import ListItem from '@/components/ListItem'
import MusicList from '@/components/MisicList'
import { SERVER_API } from '../config'

export default function Home() {
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
        <div className="mb-2">
          <h1
            className='
              text-white
              text-3xl
              font-semibold
            '>
              Welcome back
          </h1>
          
        </div>
      </Header>
      <div className='mt-2 mb-7 px-6'>
      <div
            className='
              grid
              grid-cols-1
              sm:grid-cols-2xl:grid-cols-3
              2xl:grid-cols-4gap-3
              mt-4
            '
          >
            <MusicList
              image="/images/liked_songs.png"
              title="Liked Songs"
              href={`${SERVER_API}/song/getLikedSong`}
              type='song'
            />
            <ListItem
              image="/images/liked_albums.png"
              name="Liked Albums"
              href="liked/albums"
            />
            <ListItem
              image="/images/liked_playlists.png"
              name="Liked Playlists"
              href="liked/playlists"
            />
            <ListItem
              image="/images/liked_artists.png"
              name="Liked Artists"
              href="liked/artists"
            />
            <ListItem
              image="/images/playlist.jpg"
              name="Your Playlists"
              href="playlists"
            />
          </div>
      </div>
    </div>
  )
}
