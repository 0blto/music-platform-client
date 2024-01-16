import { SERVER_API, authorizerHeaders } from "@/app/config";
import { AlbumView, AlbumWithSongs } from "@/types/album";
import { getAccessToken } from "./session";
import { Playlist } from "@/types/playlist";
import { Song, SongView } from "@/types/song";


export const getLikedSongs = async (): Promise<AlbumWithSongs> => {
    let data;
    try {
        data = await fetch(`${SERVER_API}/song/getLikedSong`, {
            headers: {
                "Authorization": `Bearer ${getAccessToken()}`
            }
        });
        if (data.status !== 200) {
            console.log(data.statusText)
            return {info: {id: '0', title: 'Liked Songs', artistId: 'you', creationData: 'sss', songsCount: 0, likesCount: 0}, songs: data} as any;
        }   
        data = await data.json()
    } catch(e) {
        console.log(e);
    }
    return ({info: {id: '0', title: 'Liked Songs', artistId: 'you', creationData: 'sss', songsCount: 0, likesCount: 0}, songs: await data} as any);
}