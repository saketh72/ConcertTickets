import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import ConcertsService from '../services/ConcertsService';
import StadiumsService from '../services/StadiumsService';
import ShowService from '../services/ShowService';
import { MDBCard, MDBContainer, MDBRow } from 'mdb-react-ui-kit';



function Newshow() {

    let nav = useNavigate();
    const [shows, setShows] = useState([])
    const [formValues, setFormValues] = useState(
        {
            musicianName: "",
            concert: {
            },
            stadium: {
            },
            availableTickets: 0,
            showDate: "",
            showTime: ""
        }
    )
    const [formErrors, setFormErrors] = useState({});
    const [concerts, setConcerts] = useState([])
    const [stadiums, setStadiums] = useState([])


    useEffect(() => {
        ConcertsService.getAllConcerts().then((res) => {
            setConcerts(res.data);

            formValues.concert = res.data[0];
            console.log("formvalues ki assign ayina concert")
            console.log(formValues.concert)

        })
        StadiumsService.getAllStadiums().then((res) => {
            setStadiums(res.data);
            formValues.stadium = res.data[0];
            formValues.availableTickets = formValues.stadium.totalCapacity;
            console.log("formvalues ki assign ayina stadium")
            console.log(formValues.stadium)
        })

        ShowService.getAllShows().then((res) => {
            setShows(res.data);
        })
    }, [])

    const handleDropdownConcert = (e) => {
        const Id = e.target.value;
        const obj = concerts.find((c) => {
            return parseInt(c.concertId) === parseInt(Id);
        });
        console.log(obj);

        formValues.concert = obj;
    }

    const handleDropdownStadium = (e) => {
        const Id = e.target.value;

        const obj = stadiums.find(s => {
            return parseInt(s.stadiumId) === parseInt(Id);
        });
        console.log(obj);
        formValues.stadium = obj;
        formValues.availableTickets = obj.totalCapacity;

    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let temp = validate(formValues)
        setFormErrors(temp);
        if (Object.keys(temp).length === 0) {
            formValues.showTime = formValues.showTime + ":00"
            console.log(formValues.showTime);
            ShowService.createShow(formValues).then((res) => {
                console.log(res);
            })
            alert("new show created");
            nav("/admin")
        }
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
            if (s.stadium.stadiumId === values.stadium.stadiumId && s.showDate === values.showDate) {
                errors.showDate = "stadium is not available on that day";
                console.log(s.showDate);
                console.log(values.showDate);
            }
        })

        if (values.showTime.length === 0) {
            errors.showTime = "show time is required";
        }

        return errors;

    }

    return (
        <div>
            <AdminNavbar />
            <div style={{
                backgroundImage: `url("https://media.istockphoto.com/photos/concert-stage-picture-id542291490?k=6&m=542291490&s=170667a&w=0&h=_1yfd3YamuIYIIJa-rxLvcsYWtIqX-TstoBHJMgu8Sg=")`,
                backgroundSize: 'contain',
                height: '570px'
            }}>

                <MDBContainer fluid>

                    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                        <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '300px' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh' }}>
                                <Form style={{ color: 'black' }}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label >Musician Name</Form.Label>
                                        <Form.Control type="text"
                                            name="musicianName"
                                            value={formValues.musicianName}
                                            onChange={handleChange} />
                                        <p style={{ color: 'red', fontSize: 14 }}>{formErrors.musicianName}</p>
                                    </Form.Group>

                                    <Form.Group className="mb-3" >
                                        <Form.Label >concert</Form.Label>
                                        <select onChange={handleDropdownConcert} >
                                            {
                                                concerts.map((c) => {

                                                    return <option key={c.concertId} value={c.concertId}>{c.concertName}</option>
                                                })

                                            }
                                        </select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" >
                                        <Form.Label >stadium</Form.Label>
                                        <select onChange={handleDropdownStadium}>
                                            {
                                                stadiums.map((s) => {
                                                    return <option key={s.stadiumId} value={s.stadiumId}>{s.stadiumDesc}</option>
                                                })
                                            }
                                        </select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" >
                                        <Form.Label >show date : </Form.Label>
                                        <input type="date"
                                            name="showDate"
                                            value={formValues.showDate}
                                            onChange={handleChange}
                                            min={new Date().toISOString().split('T')[0]} />
                                        <p style={{ color: 'red', fontSize: 12 }}>{formErrors.showDate}</p>
                                    </Form.Group>

                                    <Form.Group className="mb-3" >
                                        <Form.Label >show time : </Form.Label>
                                        <input type="time"
                                            name="showTime"
                                            value={formValues.showTime}
                                            onChange={handleChange} />
                                        <p style={{ color: 'red', fontSize: 12 }}>{formErrors.showTime}</p>
                                    </Form.Group>

                                    <Button variant='info' onClick={handleSubmit}>Submit</Button>
                                </Form>
                            </div>
                        </MDBCard>

                    </MDBRow>
                </MDBContainer>
            </div>
        </div>
    );

}

export default Newshow;