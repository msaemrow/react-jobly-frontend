import React, { useEffect, useState } from "react";
import Job from "./Job"
import JoblyApi from "../api/api"
import SearchBar from "./SearchBar";
import Loading from "./Loading"
import "../css/JobsList.css"


const JobsList = () => {
    const [jobs, setJobs] = useState(null)

    useEffect(() =>{
        findJobs();
    }, [])

    async function findJobs(title){
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
    }

    if(!jobs) return <Loading />
    return (
        <div className="JobsList">
            <h1 className="JobsList-header">Jobs</h1>
            <SearchBar searchFunc={findJobs}/>
            {jobs.map((job)=> (
                <Job
                    key={job.id} 
                    id={job.id} 
                    title={job.title}
                    salary={job.salary}
                    equity={job.equity}
                    company={job.companyName}
                    />
            ))}
        </div>
    )
}

export default JobsList;
