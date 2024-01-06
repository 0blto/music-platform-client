import { SERVER_API, authorizerHeaders } from "@/app/config";
import { ArtistView } from "@/types/artist";
import { getAccessToken } from "./session";

export const getArtistsByTitle = async (query: string): Promise<ArtistView[]> => {
    let data;
    try {
        data = await fetch(`${SERVER_API}/artist/search/${query}`);
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