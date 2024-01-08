import axios from "axios";

const BASE_URL = "http://localhost:8080/shows";
class ShowService {

    getAllShows() {
        return axios.get(BASE_URL);
    }

    updateShow(show) {
        return axios.put(BASE_URL, show);
    }

    createShow(show) {
        return axios.post(BASE_URL, show);
    }

    getShow(showId) {
        return axios.get(BASE_URL+`/${showId}`)
    }

    deleteShow(id) {
        return axios.delete(BASE_URL+`/${id}`);
    }

}
export default new ShowService();