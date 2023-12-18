import { useHttp } from "../hooks/http.hook"

const useIGDB = () => {
    const { loading, error, process, setProcess, request } = useHttp()

    const _apiBase = "https://api.igdb.com/v4"
    const proxyURL = ""
    const clientID = ""
    const clientSecret = ""

    const getToken = async () => {
        const tokenUrl = "https://id.twitch.tv/oauth2/token"
        const data = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "client_id=" + clientID + "&client_secret=" + clientSecret + "&grant_type=client_credentials"
        }

        return await request(tokenUrl, data)
    }

    const getGames = async (token, body) => {
        const gamesURL = proxyURL + _apiBase + "/games"
        const data = {
            method: "POST",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Client-ID": clientID,
                "Authorization": "Bearer " + token
            },
            body: body
		}

        return await request(gamesURL, data)
    }

    return { loading, error, process, setProcess, getToken, getGames }
}

export default useIGDB