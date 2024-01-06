import { SERVER_API, authorizerHeaders } from "@/app/config";
import { Genre } from "@/types/genre";


export const getGenres = async (): Promise<Genre[]> => {
    let data;
    try {
        data = await fetch(`${SERVER_API}/genre/getAllGenres`);
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