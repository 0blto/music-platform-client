import { SERVER_API } from "@/app/config";
import { ArtistView } from "@/types/artist";

export const getArtistById = async (id: string): Promise<ArtistView | undefined> => {
    let data;
    try {
        data = await fetch(`${SERVER_API}/artist/${id}`);
        if (data.status !== 200) {
            console.log(data.statusText)
            return undefined
        }   
        data = data.json()
    } catch(e) {
        console.log(e);
    }
    return (data as any) || undefined;
}