import { getAccessToken } from "@/actions/session";
import { SERVER_API, authorizerHeaders } from "@/app/config";
import { Song } from "@/types/song";


export const uploadSong = async (song: Song) => {
    const data = await fetch(`${SERVER_API}/song/insertSong`, {
        method: 'POST',
        headers: authorizerHeaders(`${getAccessToken()}`),
        body: JSON.stringify(song)
    })
    if (data.status !== 200) return false;
    const jsonData = await (data.json());
    console.log(jsonData);
    return 0;
    
  }