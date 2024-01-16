import { SERVER_API, authorizerHeaders } from "@/app/config";
import { getAccessToken } from "./session";
import { ArtistView } from "@/types/artist";


export const getLikedArtists = async (): Promise<ArtistView[]> => {
    let data;
    try {
        data = await fetch(`${SERVER_API}/artist/getLikedArtist`, {
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