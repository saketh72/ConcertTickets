import React, { Component } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UserNavbar = (props) => {

    let nav = useNavigate();

    const logout =(e) => {
        localStorage.setItem('login', false);
        nav('/');
    }

    return (
        <div>
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href={`/enduser/${props.userId}`}>Shows</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href={`/bookings/${props.userId}`}>Your Bookings</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Button onClick={(e) => logout(e)}>
                        Logout
                    </Button>
                </Nav.Item>
            </Nav>
        </div>
    );

}

export default UserNavbar;