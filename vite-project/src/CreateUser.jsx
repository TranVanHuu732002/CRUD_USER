import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreateUser(){
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [age,setAge] = useState()
    const [address,setAddress] = useState()
    const navigate = useNavigate()

    function Submit(e) {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser",{name, email , age ,address})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex bg-primary justify-content-center align-item-center">
            <div className="rounded bg-white m-5 w-50">
                <form onSubmit={Submit} className="m-4">
                    <h2>Create User</h2>
                    <div className="d-flex mb-2 align-item-center">
                        <label htmlFor="" className="m-auto">Name</label>
                        <input 
                            className="form-control ms-2" 
                            type="text" 
                            placeholder="Enter Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="d-flex mb-2 align-item-center">
                        <label htmlFor="" className="m-auto">Email</label>
                        <input 
                            type="text" 
                            className="form-control ms-3" 
                            placeholder="Enter Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="d-flex mb-2 align-item-center">
                        <label htmlFor="" className="m-auto">Age</label>
                        <input 
                            type="text"
                            className="form-control ms-4" 
                            placeholder="Enter Age"
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div className="d-flex mb-2 align-item-center">
                        <label htmlFor="" className="m-auto">Address</label>
                        <input 
                            type="text" 
                            className="form-control ms-3"
                            placeholder="Enter Address"
                            onChange={(e)=> setAddress(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success">Add</button>
                </form>
                
            </div>   
        </div>
    )
}

export default CreateUser;