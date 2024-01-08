
import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import UsersService from '../services/UsersService';
import MainNavbar from './MainNavbar';

function Login() {

    let nav = useNavigate();
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        console.log("handle submit");
        e.preventDefault();


        const user = users.find((a) => {
            return a.userName === username && a.password === pass
        })
        if (user && user.userName === "admin" && user.password === "admin") {
            console.log("Admin");
            nav("/admin")
        }
        else if (user) {
            localStorage.setItem('login', true);
            console.log("End user");
            nav(`/enduser/${user.userId}`)
            alert("Successfully Logged in");
        }
        else {
            alert("Account does not exist");
        }

    }

    useEffect(
        () => {
            UsersService.getAllUsers()
                .then(res => setUsers(res.data))
                .catch(error => console.log(error))
        }, []
    );

    return (
        <div >
            <MainNavbar />
            <div style={{
                backgroundImage: `url("https://wallpapercave.com/wp/wp2157765.jpg")`,
                backgroundSize: 'contain',
                height:'545px'
            }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh' }}>
                    <Form style={{color:'white'}}>
                        <Form.Group className="mb-3" >
                            <Form.Label style={{textShadow : '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}>Username</Form.Label>
                            <Form.Control type="text"
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter username" />

                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label style={{textShadow : '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}>Password</Form.Label>
                            <Form.Control type="password"
                                onChange={(e) => setPass(e.target.value)}
                                placeholder="Password" />
                        </Form.Group>
                        <Button onClick={handleSubmit} variant="primary" type="submit">
                            Log In
                        </Button> <br />
                        <Nav.Link href="/signup" style={{textShadow : '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}>Don't have an account? Signup!!</Nav.Link>
                    </Form>
                </div>
            </div>
        </div>
    );
}
export default Login;