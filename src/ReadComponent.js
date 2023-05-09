import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ReadComponent() {

    const [apiData, setApiData] = useState([])

    const getData = () => {
        axios.get("https://63c9b3ca320a0c4c954dda00.mockapi.io/crud")
            .then((response) => {
                setApiData(response.data)
            }).catch((error) => {
                console.log("error")
            })
    }

    useEffect(() => {
        getData()
    }, [])

    const handleDelete = (id) => {
        axios.delete(`https://63c9b3ca320a0c4c954dda00.mockapi.io/crud/${id}`)
            .then(() => {
                getData()
            }).catch((error) => {
                console.log("error")
            })
    }

    const setDataToStorage = (id, name, age, email) => {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("age", age)
        localStorage.setItem("email", email)
    }

    return (
        <React.Fragment>
            <h2 className='text-center mt-4'>CRUD Application: 2 - Read Component</h2>
            <div className="row">
                <div className="col-md-12">
                    <div>
                        <Link to="/create"><button className="btn btn-primary">Create New Data</button></Link>
                    </div>
                    <table className='table mt-2 table-bordered table-striped table-dark table-hover'>
                        <thead className='text-info'>
                            <tr>
                                <th className='text-center'>ID</th>
                                <th>Name</th>
                                <th className='text-center'>Age</th>
                                <th>Email</th>
                                <th className='text-center'>Edit</th>
                                <th className='text-center'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {apiData.map((dataItem) => {
                                return (
                                    <React.Fragment key={dataItem.id}>
                                        <tr>
                                            <td className='text-center'> {dataItem.id} </td>
                                            <td> {dataItem.employee_name} </td>
                                            <td className='text-center'> {dataItem.employee_age} </td>
                                            <td> {dataItem.employee_email} </td>
                                            <td className='text-center'>
                                                <Link to='/edit'><button className='btn btn-primary' onClick={() => setDataToStorage(dataItem.id, dataItem.employee_name, dataItem.employee_age, dataItem.employee_email)}>Edit</button></Link>
                                            </td>
                                            <td className='text-center'><button className='btn btn-danger' onClick={() => { if (window.confirm("Are you sure to Delete this data?")) { handleDelete(dataItem.id) } }}>Delete</button></td>
                                        </tr>
                                    </React.Fragment>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ReadComponent