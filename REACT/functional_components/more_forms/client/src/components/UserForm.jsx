import React, { useState, useEffect } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [hasFirstName, setHasFirstName] = useState(false);
    const [hasLastName, setHasLastName] = useState(false);
    const [hasEmail, setHasEmail] = useState(false);
    const [hasPassword, setHasPassword] = useState(false);
    const [hasConfirmPassword, setHasConfirmPassword] = useState(false);
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [user, setUser] = useState({})
   
    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstName, lastName, email, password};
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHasBeenSubmitted(true);
        setUser(newUser);
    };

    const handleFirstName = e => {
        setFirstName(e.target.value);
        setFirstNameError(e.target.value.length === 0 ? "" : e.target.value.length < 2 ? "First name must be at least two characters." : "");
        setHasFirstName(e.target.value.length > 1 ? true : false)
    }

    const handleLastName = e => {
        setLastName(e.target.value);
        setLastNameError(e.target.value.length === 0 ? "" : e.target.value.length < 2 ? "Last name must be at least two characters." : "");
        setHasLastName(e.target.value.length > 1 ? true : false)
    }

    const handleEmail = e => {
        setEmail(e.target.value);
        setEmailError(e.target.value.length === 0 ? "" : e.target.value.length < 5 ? "Email must be at least five characters." : "");
        setHasEmail(e.target.value.length > 4 ? true : false)
    }

    const handlePassword = e => {
        setPassword(e.target.value);
        setPasswordError(e.target.value.length === 0 ? "" : e.target.value.length < 8 ? "Password must be at least eight characters." : "");
        setHasPassword(e.target.value.length > 7 ? true : false)
    }

    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value);
        setConfirmPasswordError(e.target.value.length === 0 ? "" : e.target.value !== password ? "Passwords do not match." : "");
        setHasConfirmPassword(e.target.value === password && e.target.value.length !==0 ? true : false)
    }

    const logout = () => {
        setHasBeenSubmitted(false);
        setUser({});
        setHasFirstName(false);
        setHasLastName(false);
        setHasEmail(false);
        setHasPassword(false);
        setHasConfirmPassword(false);
    }

    useEffect(() => {
        const registerForm = document.querySelector('.form-div');
        if (registerForm){
            registerForm.style.display = hasBeenSubmitted ? 'none' : 'block';
        }
    }, [hasBeenSubmitted]);
    
    return(
        <div className="container d-flex justify-content-center gap-5">
            <div className="justify-content-center form-div">
                <div className="col-md-12">
                    {hasBeenSubmitted ? <h1>Welcome {user.firstName}</h1>:""}
                    <div className="card">
                        <div className="card-header">
                            <h4>Login Form</h4>
                        </div>
                        <div className="card-body">
                        <form className="register-form" onSubmit={createUser}>
                            <div className="mb-3">
                                <label htmlFor="first_name" className="form-label">First Name</label>
                                <input type="text" className="form-control" value={firstName} onChange={ handleFirstName } required />
                                {firstNameError ? <p>{firstNameError}</p> : ""}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="last_name" className="form-label">Last Name</label>
                                <input type="text" className="form-control" value={lastName} onChange={ handleLastName } required />
                                {lastNameError ? <p>{lastNameError}</p> : ""}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" value={email} onChange={ handleEmail } required />
                                {emailError ? <p>{emailError}</p> : ""}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="reg_password" className="form-label">Password</label>
                                <input type="password" className="form-control" value={password} onChange={ handlePassword } required />
                                {passwordError ? <p>{passwordError}</p> : ""}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" value={confirmPassword} onChange={ handleConfirmPassword } required />
                                {confirmPasswordError ? <p>{confirmPasswordError}</p> : ""}
                            </div>
                            {                              
                              hasFirstName && hasLastName && hasEmail && hasPassword && hasConfirmPassword ?
                              <button type="submit" className="btn btn-submit mb-3" >Register</button> : 
                              <button type="submit" className="btn btn-submit mb-3" disabled>Register</button>
                            }
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
                                <p>First Name : {hasBeenSubmitted ? user.firstName : firstName}</p>
                            </div>
                            <div className="mb-3">
                                <p>Last Name : {hasBeenSubmitted ? user.lastName : lastName}</p>
                            </div>
                            <div className="mb-3">
                                <p>Email : {hasBeenSubmitted ? user.email : email}</p>
                            </div>
                            <div className="mb-3">
                                <p>Password : {hasBeenSubmitted ? user.password : password}</p>   
                            </div>
                            {hasBeenSubmitted ? 
                                <div>
                                    <button className="btn btn-submit mb-3" onClick={logout} >Logout</button>
                                </div> : ""
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
    
export default UserForm;
