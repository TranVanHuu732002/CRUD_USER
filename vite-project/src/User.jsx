import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users(){
    const [users,setUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001")
        .then(result=> setUsers(result.data))
        .catch(err => console.log(err))
    }, [])

    function handleDelete(id){
        axios.delete("http://localhost:3001/deleteUser/"+id)
        .then(res => {
            console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="d-flex bg-primary justify-content-center align-item-center">
            <div className=" bg-white p-5 w-100">
                <Link to="/create" className="btn btn-success">Add +</Link>
                <table className="table">
                    <thead className="">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>{user.address}</td>
                                <td >
                                    <Link to={`/update/${user._id}`} className="btn btn-sm btn-outline-warning">Edit</Link>
                                    <button 
                                        className="ms-2 btn btn-sm btn-outline-danger" 
                                        onClick={() => handleDelete(user._id)}
                                    >Delete</button>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>

                </table>
            </div>
            
        </div>
    )
}

export default Users;