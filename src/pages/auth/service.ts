import { client, setAuthorizationHeader } from "../../api/client"
import { Credentials, Login } from "./types"

export const login = async (credentials : Credentials) => {
    const response = await client.post<Login>("/api/auth/login", credentials)
    const { accessToken } = response.data
    setAuthorizationHeader(accessToken)
};

