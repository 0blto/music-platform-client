import { SERVER_API, authorizerHeaders, unauthorizerHeaders } from "@/app/config";
import { AlbumWithSongs } from "@/types/album";
import { getAccessToken } from "./session";

export const getAlbumSongs = async (href: string): Promise<AlbumWithSongs | undefined> => {
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