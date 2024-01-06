import { getAccessToken } from "@/actions/session";
import { SERVER_API, authorizerHeaders } from "@/app/config";


export const getSongAuthor = async (songId: string) => {
    const data = await fetch(`${SERVER_API}/song/getAuthor/${songId}`)
    if (data.status !== 200) return undefined;
    return (await (data.json())).title;
  }