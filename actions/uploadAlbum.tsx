import { getAccessToken } from "@/actions/session";
import { SERVER_API, authorizerHeaders } from "@/app/config";
import { Album } from "@/types/album";


export const uploadAlbum = async (album: Album) => {
    const data = await fetch(`${SERVER_API}/album/create_album`, {
        method: 'POST',
        headers: authorizerHeaders(`${getAccessToken()}`),
        body: JSON.stringify(album)
    })
    if (data.status !== 200) return undefined;
    return (await (data.json())).id;
  }