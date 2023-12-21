import Header from "@/components/Header"
import MusicList from "@/components/MisicList";



const LikedAlbums = async () => {
    const found = []
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
            <div className="p-2 flex flex-wrap">
              <div className="m-2">
                <MusicList
                  image="/images/liked_songs.png"
                  title="Liked Songs"
                  href="liked/songs"
                />
              </div>
              <div className="m-2">
                <MusicList
                  image="/images/liked_songs.png"
                  title="Liked Songs"
                  href="liked/songs"
                />
              </div>
              <div className="m-2">
                <MusicList
                  image="/images/liked_songs.png"
                  title="Liked Songs"
                  href="liked/songs"
                />
              </div>
              <div className="m-2">
                <MusicList
                  image="/images/liked_songs.png"
                  title="Liked Songs"
                  href="liked/songs"
                />
              </div>
              <div className="m-2">
                <MusicList
                  image="/images/liked_songs.png"
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