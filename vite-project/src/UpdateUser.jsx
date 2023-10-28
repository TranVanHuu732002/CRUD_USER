import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function UpdateUser(){
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [age,setAge] = useState()
    const [address,setAddress] = useState() 
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result => {
            console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
            setAddress(result.data.address)
        })
        .catch(err => console.log(err))
    },[])

    function Update(e) {
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/"+id,{name, email , age ,address})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex bg-primary justify-content-center align-item-center">
            <div className="rounded bg-white m-5 w-50 ">
                <form onSubmit={Update} className="m-4">
                    <h2>Update User</h2>
                    <div className="d-flex mb-2 align-item-center">
                        <label htmlFor="" className="m-auto">Name</label>
                        <input 
                            type="text" 
                            className="form-control ms-2" 
                            placeholder="Enter Name"
                            value={name}
                            onChange={e=>setName(e.target.value)}
                            />
                    </div>
                    <div className="d-flex mb-2 align-item-center">
                        <label htmlFor="" className="m-auto">Email</label>
                        <input 
                            type="text" 
                            className="form-control ms-3" 
                            placeholder="Enter Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="d-flex mb-2 align-item-center">
                        <label htmlFor="" className="m-auto">Age</label>
                        <input 
                            type="text" 
                            className="form-control ms-4" 
                            placeholder="Enter Age"
                            value={age}
                            onChange={e => setAge(e.target.value)}
                            />
                    </div>
                    <div className="d-flex mb-2 align-item-center">
                        <label htmlFor="" className="m-auto">Address</label>
                        <input 
                            type="text" 
                            className="form-control ms-3" 
                            placeholder="Enter Class"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success">Update User</button>
                </form>
                
            </div>   
        </div>
    )
}

export default UpdateUser;