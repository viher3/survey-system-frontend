import axios from "axios"

export abstract class BaseRepository
{
    /**
     * @param apiResource
     * @param params
     * @param headers
     */
    async query(
        apiResource: string,
        params: any = {},
        headers: any = {}
    ): Promise<any> {

        return new Promise<any>((resolve, reject) => {
            let url = this.getApiUrl(apiResource)
            const axiosConfig: any = (headers) ? { 'headers': headers } : null

            if (Object.keys(params).length) {
                let urlSearchParams: URLSearchParams = new URLSearchParams();
                for (let key in params) {
                    urlSearchParams.set(key, params[key])
                }
                url += '?' + urlSearchParams.toString()
            }

            axios.get(url, axiosConfig)
                .then((response: any) => {
                    const apiResponse: any = response.data

                    if (response.status === 200) {
                        resolve(apiResponse)
                    }

                    if (response.status >= 400) {
                        reject(apiResponse)
                    }
                })
                .catch((error : any) => {
                    reject(error.response)
                })
        })
    }

    /**
     *
     * @param apiResource
     */
    private getApiUrl = (apiResource : string) : string => process.env.REACT_APP_API_URL + apiResource
}
