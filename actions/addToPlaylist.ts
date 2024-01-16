import { getAccessToken } from "@/actions/session";
import { SERVER_API, authorizerHeaders } from "@/app/config";


export const linkPlaylistSong = async (playlistId: string, songId: string) => {
    const data = await fetch(`${SERVER_API}/playlist/insertSong`, {
        method: 'POST',
        headers: authorizerHeaders(`${getAccessToken()}`),
        body: JSON.stringify({"playlistId": playlistId, "songId": songId})
    })
    if (data.status !== 200) return undefined;
    return (await (data.json())).id;
  }