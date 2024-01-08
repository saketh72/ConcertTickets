import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

function AdminNavbar() {

    return (
        <div>
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/admin">Shows</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/adminusers">Users</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/' >
                        Logout
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );

}

export default AdminNavbar;