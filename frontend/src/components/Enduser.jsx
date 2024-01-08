import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { Button, Card, Container, ListGroup, Nav, Row } from 'react-bootstrap';
import UserNavbar from './UserNavbar';
import ShowService from '../services/ShowService';
import { useParams } from 'react-router-dom';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardOverlay,
    MDBCardImage,
    MDBRow,
    MDBCardBody,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';

function Enduser() {

    const [shows, setShows] = useState([])
    const { userId } = useParams();
    console.log("userid :" + userId);
    useEffect(() => {
        ShowService.getAllShows().then((res) => {
            setShows(res.data);
        })

    }, [])

    const changeTime = (s) => {
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


    return (

        <div>
            <UserNavbar userId={userId} />
            <MDBRow>
                {
                    shows.map((s) => {
                        return <MDBCol>
                            <MDBCard style={{ width: "18rem", borderRadius: '10px' }} className='text-white'>
                                <MDBCardImage overlay className="img-fluid" src={s.concert.imgSrc} waves style={{ borderRadius: '10px', height: '350px', width: '310px' }} />
                                <MDBCardOverlay>
                                    <MDBCardBody>
                                        <MDBCardTitle>{s.musicianName}</MDBCardTitle>
                                        <MDBCardText>
                                            Concert Name : {s.concert.concertName} <br />
                                            Stadium Description : {s.stadium.stadiumDesc} <br />
                                            show time : {changeTime(s.showTime)} <br />
                                            show date : {changeDate(s.showDate)} <br />
                                            seat price : {s.stadium.seatFare} <br />
                                            No of Tickets Available : {s.availableTickets} <br />
                                            <Button href={`/book/${userId}/${s.showId}`}>Book Tickets</Button>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCardOverlay>
                            </MDBCard>
                        </MDBCol>
                    })
                },
            </MDBRow>
        </div>
    );
}

export default Enduser;

