import { SERVER_API, authorizerHeaders } from "@/app/config";
import { getAccessToken } from "./session";
import { Playlist } from "@/types/playlist";

export const getUserPlaylists = async (): Promise<Playlist[]> => {
    let data;
    try {
        data = await fetch(`${SERVER_API}/playlist/userPlaylists`, {
            method: 'POST',
            headers: authorizerHeaders(`${getAccessToken()}`)
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