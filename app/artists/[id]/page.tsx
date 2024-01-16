"use client"

import { getArtistReleases } from "@/actions/getArtistReleases";
import { getArtistById } from "@/actions/getArtistById";
import { SERVER_API, SERVER_IMG } from "@/app/config";
import Header from "@/components/Header";
import MusicList from "@/components/MisicList";
import { AlbumView } from "@/types/album";
import Image from "next/image";
import { usePathname } from "next/navigation";


const ArtistId = async () => {
    

    const path = usePathname();
    const id = `${path.split('/').pop()}`;
    
    const albums = await getArtistReleases(id);

    const artist = await getArtistById(id);

    

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
                            src={`${SERVER_IMG}/holod.jpg`}
                            alt="Image"
                        />
                    </div>
                    <h1 className="text-white text-3xl font-semibold">
                        {artist?.nickname}
                    </h1>
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
                    className="flex items-center gap-x-4"
                    >
                    <div className="m-2">
                        <MusicList 
                        image={`${SERVER_IMG}/holod.jpg`}
                        title={album.title.toString()}
                        href={`${SERVER_API}/album/getSongs/${album.id}`}
                        likeHref={`${SERVER_API}/album/likeAlbum/${album.id}`}
                        type="album"
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