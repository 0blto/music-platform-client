import { setSession } from "@/actions/session";
import { SERVER_API } from "@/app/config";
import { UserType } from "@/types/user";


export const loginWithLoginAndPassword = async (userData: UserType) => {
    const data = await fetch(`${SERVER_API}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
    })
    if (data.status !== 200) return 'Неверные данные';
    const jsonData = await (data.json());
    const { access_token, refresh_token } = jsonData;
    setSession(access_token, refresh_token);
    return 0;
    
  }