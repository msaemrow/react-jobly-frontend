import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../css/LoginForm.css"

const LoginForm = ({ login, setToken }) => {
    const navigate = useNavigate();
    let initialState = {
        username: "",
        password: ""
    }
    const [formData, setFormData] = useState(initialState);

    function handleChange(e){
        const {name, value} = e.target;
        setFormData(data => ({ ...data, [name]:value }))
    }

    async function handleSubmit(e){
        e.preventDefault();
        let res = await login(formData);
        if(res.success){
            navigate('/');
        } else {
            console.error("Login Error: ", error);
            navigate('/login')
        }
    }

    return (
        <div className="LoginForm">
        <h1 className="LoginForm-title"> Login</h1>
        <form className="LoginForm-form" onSubmit={handleSubmit}>
           <div className="LoginForm-data">
                <label className="LoginForm-label">Username </label>
                <input 
                    className="LoginForm-input"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </div> 
            <div className="LoginForm-data">
                <label className="LoginForm-label">Password </label>
                <input 
                    className="LoginForm-input"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div> 
            <button className="LoginForm-btn">Log In</button>
        </form>
    </div>
    )
}

export default LoginForm;
