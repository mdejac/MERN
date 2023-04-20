import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            const newUser = {firstName, lastName, email, password, confirmPassword};
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            console.log("Welcome", newUser.userName);
        } else {
            window.alert("Passwords don't match!");
        }
    };
    
    return(
        <div className="container d-flex justify-content-center gap-5">
            <div className="justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Login Form</h4>
                        </div>
                        <div className="card-body">
                        <form className="register-form" onSubmit={createUser}>
                            <div className="mb-3">
                                <label htmlFor="first_name" className="form-label">First Name</label>
                                <input type="text" className="form-control" value={firstName} onChange={ (e) => setFirstName(e.target.value) } required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="last_name" className="form-label">Last Name</label>
                                <input type="text" className="form-control" value={lastName} onChange={ (e) => setLastName(e.target.value) } required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" value={email} onChange={ (e) => setEmail(e.target.value) } required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="reg_password" className="form-label">Password</label>
                                <input type="password" className="form-control" value={password} onChange={ (e) => setPassword(e.target.value) } required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } required />
                            </div>
                            <button type="submit" className="btn btn-submit mb-3">Register</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Your Form Data</h4>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <p>First Name : {firstName}</p>
                            </div>
                            <div className="mb-3">
                                <p>Last Name : {lastName}</p>
                            </div>
                            <div className="mb-3">
                                <p>Email : {email}</p>
                            </div>
                            <div className="mb-3">
                                <p>Password : {password}</p>   
                            </div>
                            <div className="mb-3">
                                <p>Confirm Password : {confirmPassword}</p>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
    
export default UserForm;
