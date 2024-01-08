import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import ShowService from '../services/ShowService';
import ConcertsService from '../services/ConcertsService';
import StadiumsService from '../services/StadiumsService'
import { MDBCard, MDBContainer, MDBRow } from 'mdb-react-ui-kit';

function Editshow() {

    let sameTime;
    let nav = useNavigate();
    const { showId } = useParams();
    const [show, setShow] = useState(
        {
            musicianName: "",
            concert: {
                concertId: 0
            },
            stadium: {
                stadiumId: 0
            },
            showDate: "",
            showTime: ""
        }
    );
    const [concerts, setConcerts] = useState([])
    const [stadiums, setStadiums] = useState([])
    const [shows, setShows] = useState([])
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        setShow({ ...show, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        console.log(show.showId);
        e.preventDefault();
        let temp = validate(show)
        setFormErrors(temp);
        if (Object.keys(temp).length === 0) {
            if (show.showTime.length === 5) show.showTime += ":00";
            ShowService.updateShow(show).then((res) => {
                console.log(res);
            })
            alert("Successfully edited.")
            nav("/admin")
        }

    }

    const loadShow = () => {

        console.log("load show");
        ShowService.getShow(showId).then((res) => {
            setShow(res.data);
        });
        sameTime = show.showTime;
        console.log(sameTime);

    }

    useEffect(() => {
        loadShow();
        ConcertsService.getAllConcerts().then((res) => {
            setConcerts(res.data);
        })
        StadiumsService.getAllStadiums().then((res) => {
            setStadiums(res.data);
        })
        ShowService.getAllShows().then((res) => {
            setShows(res.data);
        })
    }, []);

    const handleDropdownConcert = (e) => {

        const Id = e.target.value;
        const obj = concerts.find((c) => {
            return parseInt(c.concertId) === parseInt(Id);
        });
        console.log(obj);

        show.concert = obj;
    }

    const handleDropdownStadium = (e) => {
        const Id = e.target.value;

        const obj = stadiums.find(s => {
            return parseInt(s.stadiumId) === parseInt(Id);
        });
        console.log(obj);
        show.stadium = obj;
        show.availableTickets = obj.totalCapacity;
    }

    const validate = (values) => {

        const errors = {};

        if (values.musicianName.length === 0) {
            errors.musicianName = "Musician name is required";
        }


        if (values.showDate.length === 0) {
            errors.showDate = "show date is required";
        }

        shows.map((s) => {
            if (s.showId !== show.showId
                && s.stadium.stadiumId === show.stadium.stadiumId
                && s.showDate === values.showDate) {
                errors.showDate = "stadium is not available on that day";
                console.log(s.showDate);
                console.log(values.showDate);
            }
        })

        return errors;

    }

    return (
        <div>
            <AdminNavbar />
            <div style={{
                backgroundImage: `url("https://getwallpapers.com/wallpaper/full/e/b/2/72902.jpg")`,
                backgroundSize: 'contain',
                height: '570px'
            }}>
                <MDBContainer fluid>

                    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                        <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '300px' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh', }}>
                                <Form style={{ color: 'black' }}>
                                    <Form.Label >Musician Name</Form.Label>
                                    <Form.Control type={"text"}
                                        name="musicianName"
                                        value={show.musicianName}
                                        onChange={handleChange} />
                                    <p style={{ color: 'red', fontSize: 12 }}>{formErrors.musicianName}</p> <br />

                                    <label >concert</label>&nbsp;&nbsp;
                                    <select onChange={handleDropdownConcert}>
                                        <option selected value={show.concert.concertId}>{show.concert.concertName}</option>
                                        {
                                            concerts.map((c) => {
                                                if (c.concertName !== show.concert.concertName)
                                                    return <option value={c.concertId}>{c.concertName}</option>
                                            })
                                        }
                                    </select>
                                    <br /> <br />

                                    <label >stadium</label>&nbsp;&nbsp;
                                    <select onChange={handleDropdownStadium}>
                                        <option selected value={show.stadium.stadiumId}>{show.stadium.stadiumDesc}</option>
                                        {
                                            stadiums.map((s) => {
                                                if (s.stadiumDesc !== show.stadium.stadiumDesc)
                                                    return <option value={s.stadiumId}>{s.stadiumDesc}</option>
                                            })
                                        }
                                    </select>
                                    <br /><br />

                                    <label >show date :   </label>
                                    <input type={"date"}
                                        name="showDate"
                                        value={show.showDate}
                                        onChange={handleChange}
                                        min={new Date().toISOString().split('T')[0]} />
                                    <p style={{ color: 'red', fontSize: 12 }}>{formErrors.showDate}</p>

                                    <label >show time : </label>
                                    <input type="time"
                                        name="showTime"
                                        value={show.showTime}
                                        onChange={handleChange} />
                                    <p style={{ color: 'red', fontSize: 12 }}>{formErrors.showTime}</p><br />

                                    <Button variant='info' onClick={handleSubmit}>Submit</Button>
                                </Form>
                            </div>
                        </MDBCard>
                    </MDBRow>
                </MDBContainer>
            </div>
        </div >
    );

}

export default Editshow;