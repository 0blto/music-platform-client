import Header from "@/components/Header";
import MusicList from "@/components/MisicList";
import Image from "next/image";

const ArtistId = () => {
    const artist = {
        name: 'Artist',
        likes: 30,
        avatar: '/images/album.jpg'
    }
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
                    <div
                        className="
                            relative
                            min-h-[500px]
                            min-w-[300px]
                            max-h-[1000px]
                            max-w-[1000px]
                            drop-shadow-lg
                            rounded-lg
                        "
                    >
                        <Image
                            fill
                            className="rounded-lg object-cover drop-shadow-lg"
                            src={artist.avatar}
                            alt="Image"
                        />
                    </div>
                    <h1 className="text-white text-3xl font-semibold">
                        {artist.name}
                    </h1>
                </div>
                <div className="text-sm text-neutral-400 mb-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eveniet eius, deserunt labore obcaecati libero perspiciatis, incidunt maxime aut natus doloremque quia at possimus quaerat ipsam. Adipisci aspernatur facilis quisquam.</p>
                </div>
                <div className="mb-2 flex flex-col gap-y-6">
                <h1 className="text-white text-3xl font-semibold">
                    Releases
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
 
export default ArtistId;