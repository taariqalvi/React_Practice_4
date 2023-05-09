import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Create() {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://63c9b3ca320a0c4c954dda00.mockapi.io/crud", {
            employee_name: name,
            employee_age: age,
            employee_email: email
        }).then(() => {
            navigate("/")
        }).catch((error) => {
            console.log("error")
        })
    }

    return (
        <React.Fragment>
            <h2 className='text-center'>CRUD Application: 1 - Create Component</h2>
            <div className="row mt-4">
                <div className="col-md-4">
                    <div className='mb-2'>
                        <Link to="/"><button className="btn btn-primary">Go To Read Data</button></Link>
                    </div>
                    <div className="bg-primary p-2 text-center">
                        <h1 className='text-white'>Create New Data</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Enter Name: </label>
                            <input type="text" placeholder='Name' className="form-control" onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label>Enter Age: </label>
                            <input type="numer" placeholder='Age' className="form-control" onChange={(e) => setAge(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label>Enter Email: </label>
                            <input type="email" placeholder='Email' className="form-control" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <br />
                        <div className="d-grid">
                            <button type="reset" className='btn btn-info'>Reset</button>
                            <button type="submit" className='btn btn-primary mt-1'>Submit</button>
                        </div>
                    </form>
                    <br />
                    <h5>Name: {name}</h5>
                    <h5>Age: {age}</h5>
                    <h5>Email: {email}</h5>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Create