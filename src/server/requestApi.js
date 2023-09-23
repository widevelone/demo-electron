import axios from 'axios';
import config from "./config.json";

export const requestApi = (setPosts, urlApi) => {
    axios.get(`${config.requestUrl}/${urlApi}`)
        .then((response) => {
            setPosts(response.data);
        })
        .catch((error) => {
            console.error("Error al obtener la lista de posts:", error);
        });
}
