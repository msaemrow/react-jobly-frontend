import React, { useState, useEffect } from "react";
import { useParams} from "react-router";
import "../css/JobDetail.css"
import JoblyApi from "../api/api";

const JobDetail = () => {
    const {id} = useParams();
    const [job, setJob] = useState(null)

    useEffect(() =>{
        getSingleJob();
    }, [])

    async function getSingleJob(){
        let job = await JoblyApi.getJob(id);
        setJob(job);
    }

    if(!job) return <div><h1>No Companies Found!</h1></div>


    return (
        <div  className='JobDetail'>
            <h3 className="JobDetail-title"> {job.title} </h3>
            <p className="JobDetail-company"> {job.company.name} </p>
            <p className="JobDetail-salary"> Salary: {job.salary} </p>
            <p className="JobDetail-equity"> Equity: {job.equity} </p>
        </div>
    )
}

export default JobDetail;