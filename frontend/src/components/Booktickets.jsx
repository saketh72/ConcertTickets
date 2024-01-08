import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import UserNavbar from './UserNavbar';
import ShowService from '../services/ShowService';
import BookingService from '../services/BookingService';

function Booktickets() {
    let nav = useNavigate();
    const [tickets, setTickets] = useState(0)
    const [price, setPrice] = useState(0);
    const { userId, showId } = useParams();

    const [show, setShow] = useState({
        stadium: {
            stadiumDesc: "",
            seatFare: 0
        },
        concert: {
            concertName: ""
        }
    });


    function getTheShow() {
        ShowService.getShow(showId).then((res) => {
            setShow(res.data);
        })
    }

    const handleChange = (e) => {
        setTickets(e.target.value);
        setPrice(e.target.value * show.stadium.seatFare);
    }

    const book = () => {
        if (price > 0) {
            BookingService.book(showId, tickets, userId).then((res) => {
                console.log(res);
                alert("Booking done successfully!");
                nav(`/bookings/${userId}`)
            }).catch((err) => {
                alert(err.response.data);
            });
        }
        else {
            alert("No of Tickets not specified");
        }
    }

    const changeTime = (s) => {
        if(s.length < 6)  
        s = s.substring(0, 5)
        let cs = "";
        let i;
        if (parseInt(s.substring(0, 2)) > 12) {
            i = parseInt(s.substring(0, 2)) - 12;
            cs += i.toString() + s.substring(2, 5) + " pm";
        }
        else {
            cs += s + " am";
        }
        return cs;
    }

    const changeDate = (d) => {
        
        let year = d.substring(0, 4)
        let month = d.substring(5, 7)
        let day = d.substring(9, 11)

        switch (month) {
            case "01": month = "january"; break;
            case "02": month = "february"; break;
            case "03": month = "march"; break;
            case "04": month = "april"; break;
            case "05": month = "may"; break;
            case "06": month = "june"; break;
            case "07": month = "july"; break;
            case "08": month = "august"; break;
            case "09": month = "september"; break;
            case "10": month = "october"; break;
            case "11": month = "november"; break;
            case "12": month = "december"; break;
        }
        let cd = day + " " + month + " " + year;
        return cd;
    }

    useEffect(() => {
        getTheShow();
    }, [])
    return (
        <div>
            <UserNavbar userId={userId} />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh' }}>
                <Form> <b> CONCERT NAME : </b>
                    <Form.Label> {show.concert.concertName} </Form.Label> <br />
                    <b> STADIUM DESCRIPTION : </b>
                    <Form.Label> {show.stadium.stadiumDesc}</Form.Label> <br />
                    <b>SHOW DATE : </b>
                    <Form.Label> {show.showDate}</Form.Label> <br />
                    <b>SHOW TIME : </b>
                    <Form.Label>{show.showTime}</Form.Label> <br />
                    <b>Total number of tickets :</b> <br />
                    <Form.Control type="number" onChange={handleChange} />
                    <b>Total Price : </b>
                    <Form.Label>{price}</Form.Label> <br />
                    <Button variant="info" onClick={book}>Book</Button>
                </Form>
            </div>
        </div>
    );

}

export default Booktickets;