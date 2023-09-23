import axios from 'axios'
import config from "./config.json"

axios.defaults.baseURL = config.requestUrl

export const requestDefaultApi = (urlApi, setPosts) => {
    axios.get(`${config.requestUrl}${urlApi}`)
        .then((response) => {
            setPosts(response.data)
        })
        .catch((error) => {
            console.error("Error al obtener la lista de posts:", error)
        })
}

export async function requestApi(
    method,
    url,
    data,
    setData
    ) {
    return axios({
      method,
      url,
      data,
    })
    .then((response) => {
      setData(response.data)
    }
    )
    .catch(error => {
      console.log("error on request")
    })
  }