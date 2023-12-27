import { SERVER_API } from "@/app/config";
import { AlbumView } from "@/types/album";


export const getAlbumsByTitle = async (query: string): Promise<AlbumView[]> => {
    let data;
    try {
        data = await fetch(`${SERVER_API}/album/search/${query}`);
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