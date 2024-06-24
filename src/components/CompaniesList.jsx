import React, { useEffect, useState } from "react";
import Company from "./Company"
import JoblyApi from "../api/api"
import SearchBar from "./SearchBar"
import '../css/CompaniesList.css'


const CompaniesList = () => {
    const [companies, setCompanies] = useState(null);

    useEffect(() =>{
        findCompanies();
    }, [])

    async function findCompanies(name){
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }

    if(!companies) return <div><h1>No Companies Found!</h1></div>

    return (
        <div className="CompaniesList">
            <h1 className="CompaniesList-header">Companies</h1>
            <SearchBar searchFunc={findCompanies}/>
            {companies.map((company) => (
                <Company
                    key={company.handle} 
                    name={company.name}
                    handle={company.handle}
                    employees={company.numEmployees}
                    description={company.description}
                />
            ))}


        </div>
    )
}

export default CompaniesList;
