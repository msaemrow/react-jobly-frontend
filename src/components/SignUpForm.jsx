import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../css/SignUpForm.css"

const SignUpForm = ({ signup }) => {
    const navigate = useNavigate();
   let initialState = {
        username: "",
        password: "",
        firstName: "",
        lastName:"",
        email: ""
    }
    const [formData, setFormData] = useState(initialState)

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(data => ({ ...data, [name]: value }))
    }

    async function handleSubmit(e){
        e.preventDefault();
        let res = await signup(formData);
        if(res.success){
            navigate("/")
        } else{
            navigate("/signup")
        }
    }

    return(
        <div className="SignUpForm">
            <h1 className="SignUpForm-title">Sign Up!</h1>
            <form className="SignUpForm-form" onSubmit={handleSubmit}>
               <div className="SignUpForm-data">
                    <label className="SignUpForm-label">Username </label>
                    <input 
                        className="SignUpForm-input"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div> 
                <div className="SignUpForm-data">
                    <label className="SignUpForm-label">Password </label>
                    <input 
                        className="SignUpForm-input"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div> 
                <div className="SignUpForm-data">
                    <label className="SignUpForm-label">First Name </label>
                    <input 
                        className="SignUpForm-input"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div> 
                <div className="SignUpForm-data">
                    <label className="SignUpForm-label">Last Name </label>
                    <input 
                        className="SignUpForm-input"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div> 
                <div className="SignUpForm-data">
                    <label className="SignUpForm-label">Email </label>
                    <input 
                        className="SignUpForm-input"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div> 
                <button className="SignUpForm-btn">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;