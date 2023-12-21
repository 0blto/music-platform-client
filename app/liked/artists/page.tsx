import ArtistItem from "@/components/ArtistItem";
import Header from "@/components/Header"



const LikedArtists = async () => {
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
                Liked Artists
              </h1>
            </div>
            <div className="p-2 flex flex-wrap">
              <div className="m-2">
                <ArtistItem name="whrsmmnd" likes={9921939} href="/artists/1" image="/images/album.jpg"/>
              </div>
              <div className="m-2">
                <ArtistItem name="StopaPupa" likes={99219391} href="/artists/2" image="/images/songs.png"/>
              </div>
              <div className="m-2">
                <ArtistItem name="destroy lonely" likes={0} href="/artists/3" image="/images/album.jpg"/>
              </div>
              <div className="m-2">
                <ArtistItem name="suffering" likes={0} href="/artists/4" image="/images/album.jpg"/>
              </div>
            </div>
          </Header>
        </div>
      );
}

export default LikedArtists;