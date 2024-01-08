import axios from "axios";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import UsersService from "../services/UsersService";
import UserNavbar from "./UserNavbar";

function YourBookings() {

    const { userId } = useParams();
    const [bookings, setBookings] = useState([
        {

            show: {
                concert : {
                    concertName : ""
                },
                stadium : {
                    stadiumDesc : ""
                },
                showDate: "",
                showTime: ""
            }
        }
    ])

    useEffect(() => {

        axios.get(`http://localhost:8080/bookinguser/${userId}`).then((res) => {
            setBookings(res.data);
        })

    }, [userId])

    return (
        <div>
            <UserNavbar userId={userId} />
            <h1>Your Bookings</h1>
            <MDBTable striped hover>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Booking Id</th>
                        <th scope='col'>Booked Date</th>
                        <th scope='col'>Concert Name</th>
                        <th scope='col'>Stadium Description</th>
                        <th scope='col'>Show Time</th>
                        <th scope='col'>Show Date</th>
                        <th scope='col'>Number Of Seats</th>
                        <th scope='col'>Total Amount</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        bookings.map((b) => {
                            return <tr key={b.bookingId}>
                                <td>{b.bookingId} </td>
                                <td>{b.bookedDate}</td>
                                <td>{b.show.concert.concertName}</td>
                                <td>{b.show.stadium.stadiumDesc}</td>
                                <td>{b.show.showTime}</td>
                                <td>{b.show.showDate} </td>
                                <td>{b.noOfSeats}</td>
                                <td>{b.totalAmount}</td>
                            </tr>
                        })
                    }
                </MDBTableBody>

            </MDBTable>
            

        </div>
    );

}

export default YourBookings;