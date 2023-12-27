import { SERVER_API } from "@/app/config";
import { Playlist } from "@/types/playlist";


export const getPlaylistsByTitle = async (query: string): Promise<Playlist[]> => {
    let data;
    try {
        data = await fetch(`${SERVER_API}/playlist/search/${query}`);
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