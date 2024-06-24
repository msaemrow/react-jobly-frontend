import React, {useState, useContext} from "react";
import UserContext from "./UserContext";
import JoblyApi from "../api/api";
import { useNavigate } from "react-router";
import "../css/UpdateProfile.css"

const UpdateProfile = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    let initialState = {
        username: currentUser.username,
        firstName: currentUser.firstName,
        lastName:currentUser.lastName,
        email: currentUser.email,
        password: ""
    }
    const [formData, setFormData] = useState(initialState);
    const [formErrors, setFormErrors] = useState([])
    const navigate = useNavigate()

    function handleChange(e){
        const {name, value}  = e.target;
        setFormData( data => ({
            ...data, [name]:value
        }))
    }

    async function handleSubmit(e){
        e.preventDefault();
        let profileData = {
            firstName: formData.firstName,
            lastName:formData.lastName,
            email: formData.email,
            password: formData.password
        }

        let username = formData.username;
        try{
            let updatedUser = await JoblyApi.updateProfile(username, profileData);
            setCurrentUser(updatedUser);
            navigate('/companies')
        } catch(errors){
            setFormErrors(errors);
        }
    }

    return (
        <div className="UpdateProfile">
            <h1 className="UpdateProfile-title">Update Profile</h1>
            <form className="UpdateProfile-form" onSubmit={handleSubmit}>
                <div className="UpdateProfile-data">
                    <label className="UpdateProfile-label">First Name: </label>
                    <input
                        className="UpdateProfile-input"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange} 
                    />
                </div>
                <div className="UpdateProfile-data">
                    <label className="UpdateProfile-label">Last Name: </label>
                    <input
                        className="UpdateProfile-input"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange} 
                    />
                </div>
                <div className="UpdateProfile-data">
                    <label className="UpdateProfile-label">Email: </label>
                    <input
                        className="UpdateProfile-input"
                        name="email"
                        value={formData.email}
                        onChange={handleChange} 
                    />
                </div>
                <div className="UpdateProfile-data">
                    <label className="UpdateProfile-label">Password: </label>
                    <input
                        className="UpdateProfile-input"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                {formErrors.length ? (
                    <div>
                        {formErrors.map(error => (
                            <p key={error}>{error}</p>
                        ))}
                    </div>
                ) : null}
                <button className="UpdateProfile-btn" type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default UpdateProfile;