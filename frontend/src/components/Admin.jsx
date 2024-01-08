import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import ShowService from '../services/ShowService';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function Admin() {

    const [shows, setShows] = useState([]);

    useEffect(() => {
        ShowService.getAllShows().then((res) => {
            console.log(res);
            setShows(res.data);
        })
    }, []);

    function deleteShow(id) {
        ShowService.deleteShow(id).then((res) => {
            alert("sucessfully deleted!");
            window.location.reload(true);
        }).catch((err) => {
            alert("Bookings have already been made");
        })
    }

    return (
        <div>
            <AdminNavbar />
            <MDBTable striped hover>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Musician Name</th>
                        <th scope='col'>Concert Name</th>
                        <th scope='col'>Stadium Description</th>
                        <th scope='col'>Available Tickets</th>
                        <th scope='col'>Seat Fare</th>
                        <th scope='col'>Show Date</th>
                        <th scope='col'>Show Time</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>

                    {
                        shows.map((s) => {
                            return <tr key={s.showId}>
                                <td>{s.musicianName}</td>
                                <td> {s.concert.concertName} </td>
                                <td> {s.stadium.stadiumDesc} </td>
                                <td> {s.availableTickets} </td>
                                <td> {s.stadium.seatFare} </td>
                                <td> {s.showDate} </td>
                                <td> {s.showTime} </td>
                                <td><Button variant='info' href={`/editshow/${s.showId}`}>Edit</Button> </td>
                                <td><Button onClick={() => deleteShow(s.showId)} variant="danger" >Delete</Button></td>

                            </tr>
                        })

                    }
                </MDBTableBody>
            </MDBTable>
            <Button variant="outline-secondary" href="/newshow">Add a new show</Button>
        </div>
    );

}
export default Admin;