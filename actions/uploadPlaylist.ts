import { getAccessToken } from "@/actions/session";
import { SERVER_API, authorizerHeaders } from "@/app/config";
import { PlaylistInsert } from "@/types/playlist";


export const uploadPlaylist = async (playlist: PlaylistInsert) => {
    const data = await fetch(`${SERVER_API}/playlist/insertPlaylist`, {
        method: 'POST',
        headers: authorizerHeaders(`${getAccessToken()}`),
        body: JSON.stringify(playlist)
    })
    if (data.status !== 200) return undefined;
    return (await (data.json())).id;
  }