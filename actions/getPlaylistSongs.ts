import { SERVER_API, authorizerHeaders, unauthorizerHeaders } from "@/app/config";
import { getAccessToken } from "./session";
import { PlaylistWithSongs } from "@/types/playlist";

export const getAlbumSongs = async (href: string): Promise<PlaylistWithSongs | undefined> => {
    let data;
    try {
        data = await fetch(href);
        if (data.status !== 200) {
            console.log(data.statusText)
            return undefined
        }   
        data = data.json()
    } catch(e) {
        console.log(e);
    }
    return (data as any) || [];
}