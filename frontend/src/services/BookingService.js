import axios from "axios";

const BASE_URL = "http://localhost:8080/booking"

class BookingService {

    book(showId, tickets, userId) {
        return axios.get(`http://localhost:8080/book/${showId}/${tickets}/${userId}`);
    }

    getBookingsById(id) {
        return axios.get(BASE_URL+"/"+id);
    }

}

export default new BookingService();