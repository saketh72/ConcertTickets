import axios from "axios";

const BASE_URL = "http://localhost:8080/concerts"

class ConcertsService {

    getAllConcerts() {
        return axios.get(BASE_URL);
    }
}

export default new ConcertsService();