import { getAccessToken } from "@/actions/session";
import { SERVER_API, authorizerHeaders } from "@/app/config";


export const linkAlbumSong = async (albumId: string, songId: string) => {
    const data = await fetch(`${SERVER_API}/album/insertSong`, {
        method: 'POST',
        headers: authorizerHeaders(`${getAccessToken()}`),
        body: JSON.stringify({albumId: albumId, songId: songId})
    })
    if (data.status !== 200) return undefined;
    return (await (data.json())).id;
  }