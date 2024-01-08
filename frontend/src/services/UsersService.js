import axios from "axios";

const BASE_URL = "http://localhost:8080/users"

class UsersService {

    getAllUsers() {
        return axios.get(BASE_URL);
    }

    postUser(user) {
        return axios.post(BASE_URL, user);
    }

    getUser(userid) {
        return axios.get(BASE_URL+"/"+userid);
    }


}

export default new UsersService();