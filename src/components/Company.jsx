import React from "react";
import { Link } from "react-router-dom";
import "../css/Company.css"


const Company = ({ name, handle, employees, description }) => {
    return (
        <div  className='Company'>
            <h2 className="Company-name"> 
            <Link className="Company-link" to={`/companies/${handle}`}>{name}</Link>
            </h2>
            <p className="Company-description">{description}</p>
            <p className="Company-employees">Employees: {employees}</p>
        </div>
    )
}

export default Company;