import { SERVER_API, authorizerHeaders, unauthorizerHeaders } from "@/app/config";
import { AlbumWithSongs } from "@/types/album";
import { getAccessToken } from "./session";

export const likeSomething = async (href: string) => {
    let data;
    try {
        data = await fetch(href, {
            method: 'POST',
            headers: authorizerHeaders(`${getAccessToken()}`)
        });
        if (data.status !== 200) {
            console.log(data.statusText)
        }
    } catch(e) {
        console.log(e);
    }
}