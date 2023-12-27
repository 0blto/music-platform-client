"use client"

import { getArtistReleases } from "@/actions/getArtistReleases";
import { SERVER_API, SERVER_IMG } from "@/app/config";
import Header from "@/components/Header";
import MusicList from "@/components/MisicList";
import { AlbumView } from "@/types/album";
import Image from "next/image";
import { usePathname } from "next/navigation";


const ArtistId = async () => {
    const artist = {
        name: 'Artist',
        likes: 30,
        avatar: '/images/album.jpg'
    }

    const path = usePathname();
    const id = `${path.split('/').pop()}`;
    
    const albums = await getArtistReleases(id);
    

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
                {albums.map((album: AlbumView) => (
                    <div 
                    key={album.id.toString()} 
                    className="flex items-center gap-x-4 w-full"
                    >
                    <div className="m-2">
                        <MusicList 
                        image={`${SERVER_IMG}/holod.jpg`}
                        title={album.title.toString()}
                        href={`${SERVER_API}/album/getSongs/${album.id}`}
                        />
                    </div>
                    </div>
                ))}
                
                </div>
            </Header>
        </div>
        );
}
 
export default ArtistId;