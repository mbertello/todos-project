import React from 'react'
import { Link } from 'react-router-dom'

const AddButton = (props) => {
    return (
        <Link to="/todos/new">
            <button className="w-100 btn btn-success">Nueva tarea</button>
        </Link>
    )
}

export default AddButton