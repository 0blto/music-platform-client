import { SERVER_API, authorizerHeaders } from "@/app/config"
import { getAccessToken } from "./session"

export const becomeArtist = async (nickname: string) => {
    const response = await fetch(`${SERVER_API}/artist/create`, {
        method: 'POST',
        headers: authorizerHeaders(`${getAccessToken()}`),
        body: JSON.stringify({nickname: nickname})
    }
    )

    if (response.status === 200) {
        return true
    }
    console.log('не получилось')
    return false
}