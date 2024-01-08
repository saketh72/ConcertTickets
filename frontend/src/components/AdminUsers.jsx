import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { useEffect } from "react";
import { useState } from "react";
import UsersService from "../services/UsersService";
import AdminNavbar from "./AdminNavbar";

function AdminUsers() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        UsersService.getAllUsers().then((res) => {
            setUsers(res.data);
        })
    }, [])

    return (
        <div>
            <AdminNavbar />
            <MDBTable striped hover >
                <MDBTableHead>
                    <tr>
                        <th scope='col'>User Id</th>
                        <th scope='col'>Username</th>
                        <th scope='col'>Email Id</th>
                        <th scope='col'>Mobile number</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                {
                    users.map((u) => {
                        return <tr key={u.userId}>
                            <td>{u.userId} </td>
                            <td>{u.userName}</td>
                            <td>{u.emailId} </td>
                            <td>{u.mobileNo} </td>
                        </tr>
                    })
                }
                </MDBTableBody>
            </MDBTable>
        </div>
    );

}

export default AdminUsers;