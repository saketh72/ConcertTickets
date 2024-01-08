
import React, { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import MainNavbar from './MainNavbar';
import UsersService from '../services/UsersService';
import { useNavigate } from 'react-router-dom';

function Signup() {

    let nav = useNavigate();
    const [formValues, setFormValues] = useState(
        {
            userName: "",
            password: "",
            mobileNo: Number,
            emailId: ""
        }
    );
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let temp = validate(formValues)
        setFormErrors(temp);

        if (Object.keys(temp).length === 0) {

            UsersService.postUser(formValues)
                .then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                });
            alert("Registered Successfully!");
            nav('/login')
        }

    }

    const validate = (values) => {

        const errors = {};
        const usernameregex = /[a-zA-Z]/;
        const emailregex = /[a-zA-Z0-9]+@gmail.com$/;

        if (values.userName.length === 0) {
            errors.userName = "Username is required";
        } else if (values.userName.length < 6) {
            errors.userName = "username should contain atleast 6 characters";
        } else if (!usernameregex.test(values.userName)) {
            errors.userName = "username should only contain alphabets";
        }


        if (values.password.length === 0) {
            errors.password = "password is required";
        } else if (values.password.length < 6) {
            errors.password = "password should contain atleast 6 characters";
        }

        if (values.emailId.length === 0) {
            errors.emailId = "emailid is required";
        } else if (!emailregex.test(values.emailId)) {
            errors.emailId = "Not a valid emailid";
        }

        if (values.mobileNo.length === 0) {
            errors.mobileNo = "mobileno is required";
        } else if (values.mobileNo.length !== 10) {
            errors.mobileNo = "Not a valid mobile no";
        }

        return errors;

    }

    return (
        <div >
            <MainNavbar />
            <div style={{
                backgroundImage: `url("https://wallpapercave.com/wp/wp2157765.jpg")`,
                backgroundSize: 'contain',
                height: '545px'
            }}>
                {/* <div style={{ backgroundColor: 'white', height: '200px', width: '200px',
            position:'absolute', left:'450px', }}></div> */}


                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
                        <Form onSubmit={handleSubmit} style={{ color: "white" }}>
                            <Form.Group className="mb-3" >
                                <Form.Label style={{textShadow : '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}>Username</Form.Label>
                                <Form.Control type="text"
                                    name="userName"
                                    value={formValues.userName}
                                    onChange={handleChange}
                                    placeholder="Enter Username" />
                                <p style={{ color: 'red', fontSize: 12 }}>{formErrors.userName}</p>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label style={{textShadow : '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}>Password</Form.Label>
                                <Form.Control type="password"
                                    name="password"
                                    value={formValues.password}
                                    onChange={handleChange}
                                    placeholder="Enter Password" />
                                <p style={{ color: 'red', fontSize: 12 }}>{formErrors.password}</p>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label style={{textShadow : '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}>Email Id</Form.Label>
                                <Form.Control type="text"
                                    name="emailId"
                                    value={formValues.emailId}
                                    onChange={handleChange}
                                    placeholder="Enter Email Id" />
                                <p style={{ color: 'red', fontSize: 12 }}>{formErrors.emailId}</p>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label style={{textShadow : '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}>Mobile Number</Form.Label>
                                <Form.Control type="text"
                                    name="mobileNo"
                                    value={formValues.mobileNo}
                                    onChange={handleChange}
                                    placeholder="Enter Mobile Number" />
                                <p style={{ color: 'red', fontSize: 12 }}>{formErrors.mobileNo}</p>
                            </Form.Group>

                            <Button onClick={handleSubmit} variant="primary" type="submit">
                                SignUp
                            </Button>
                            <Nav.Link href="/login" style={{ color: "black" }}>Already Have an account? Login</Nav.Link>
                        </Form>

                </div>
            </div>
        </div>
    );

}

export default Signup;