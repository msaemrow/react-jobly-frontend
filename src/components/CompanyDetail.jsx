import React, { useState, useEffect  } from "react";
import { useParams} from "react-router";
import "../css/CompanyDetail.css"
import JoblyApi from "../api/api";
import Loading from "./Loading";
import Job from "./Job";


const CompanyDetail = () => {
    const { handle } = useParams();
    const [company, setCompany] = useState(null);
    const [pageLoading, setPageLoading] = useState(true);
    const [pageError, setPageError] = useState(false);

    
    useEffect(() =>{
        getSingleCompany();
    }, [])

    async function getSingleCompany(){
        try{
            let company = await JoblyApi.getCompany(handle);
            setCompany(company);
            setPageLoading(false);
        } catch(error){
            setPageError(true);
            setPageLoading(false);
        }

    }
    if(pageLoading) return <Loading />
    if(pageError) return <div><h1>Could not find that company</h1></div>

    return (
        <div  className='CompanyDetail'>
            <h2 className="CompanyDetail-name"> {company.name} </h2>
            <h4 className="CompanyDetail-description">{company.description}</h4>
            <h4 className="CompanyDetail-employees">Employees: {company.numEmployees}</h4>
            <h4 className="CompanyDetail-jobs">Jobs: ({company.jobs.length})</h4>
            {company.jobs.length === 0 ? (
                <p>No Current Job Openings</p>
            ) : (            
            company.jobs.map((job)=> (
                <Job
                    key={job.id} 
                    id={job.id} 
                    title={job.title}
                    salary={job.salary}
                    equity={job.equity}
                    company={job.companyName}
                    />
            )))}
        </div>
    )
}

export default CompanyDetail;