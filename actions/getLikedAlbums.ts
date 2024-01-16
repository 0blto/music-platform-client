import { SERVER_API, authorizerHeaders } from "@/app/config";
import { AlbumView } from "@/types/album";
import { getAccessToken } from "./session";


export const getLikedAlbums = async (): Promise<AlbumView[]> => {
    let data;
    try {
        data = await fetch(`${SERVER_API}/album/getLikedAlbums`, {
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