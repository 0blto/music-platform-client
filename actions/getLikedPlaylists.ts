import { SERVER_API, authorizerHeaders } from "@/app/config";
import { AlbumView } from "@/types/album";
import { getAccessToken } from "./session";
import { Playlist } from "@/types/playlist";


export const getLikedPlaylist = async (): Promise<Playlist[]> => {
    let data;
    try {
        data = await fetch(`${SERVER_API}/playlist/getLikedPlaylists`, {
            headers: {
                "Authorization": `Bearer ${getAccessToken()}`
            }
        });
        if (data.status !== 200) {
            console.log(data.statusText)
            return []
        }   
        data = data.json()
    } catch(e) {
        console.log(e);
    }
    return (data as any) || [];
}