import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Edit() {

    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setAge(localStorage.getItem("age"))
        setEmail(localStorage.getItem("email"))
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put(`https://63c9b3ca320a0c4c954dda00.mockapi.io/crud/${id}`, {
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
            <h2 className='text-center mt-4'>CRUD Application: 4 - Update/Edit Component</h2>
            <div className="row mt-4">
                <div className="col-md-4">
                    <div className='mb-2'>
                        <Link to="/"><button className="btn btn-primary">Go To Read Data</button></Link>
                    </div>
                    <div className="bg-dark p-2 text-white text-center">
                        <h1>Update/Edit Data</h1>
                    </div>
                    <form onSubmit={handleUpdate}>
                        <div className="form-group">
                            <label>Enter Name: </label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Enter Age: </label>
                            <input type="numer" value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Enter Email: </label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className="form-control" />
                        </div>
                        <br />
                        <div className="d-grid">
                            <button type="submit" className='btn btn-dark mt-1'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Edit