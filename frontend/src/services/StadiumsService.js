import axios from "axios";

const BASE_URL = "http://localhost:8080/stadiums"

class StadiumsService {

    getAllStadiums() {
        return axios.get(BASE_URL);
    }
}

export default new StadiumsService();