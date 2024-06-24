import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import "../css/Job.css"


const Job = ({ id, title, salary, equity, company }) => {
    const { apply, hasAppliedToJob } = useContext(UserContext);
    const [hasApplied, setHasApplied] = useState(false);

    useEffect(function updateAppliedStatus(){
        setHasApplied(hasAppliedToJob(id));
    }, [id, hasAppliedToJob])

    function handleApply(e){
        if(hasAppliedToJob(id)) return;
        apply(id);
        setHasApplied(true);
    }

    return (
        <div  className='Job'>
            <h4 className="Job-title">
                 <Link className="Job-link" to={`/jobs/${id}`}>{title}</Link>
                 <span>
                    {hasApplied ? (
                        <button className="Job-apply-btn disabled"> Applied</button>
                    ) : (
                    <button className="Job-apply-btn" onClick={handleApply}>
                    Apply
                    </button>
                    )}
                </span>
            </h4>
            <p className="Job-company"> {company} </p>
            <p className="Job-salary"> Salary: {salary} </p>
            <p className="Job-equity"> Equity: {equity} </p>
        </div>
    )
}

export default Job;