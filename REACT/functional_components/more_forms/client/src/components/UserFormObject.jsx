import React, { useState } from  'react';
    
const UserFormObject = (props) => {
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        passwordError: '',
        confirmPasswordError: '',
        hasFirstName: false,
        hasLastName: false,
        hasEmail: false,
        hasPassword: false,
        hasConfirmPassword: false,
        hasBeenSubmitted: false,
        user: {}        
    };

    const [state, setState] = useState(initialState)

    const handleInput = e => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        const inputErrorKey = inputName + "Error"
        const hasInputKey = "has"+inputName.charAt(0).toUpperCase()+inputName.slice(1);
        const {errorMsg, isValid} = validateInput(inputName, inputValue);
        setState({...state, [inputName]:inputValue, [inputErrorKey]:errorMsg, [hasInputKey]:isValid});
    }

    const validateInput = (targetName, targetValue) => {
        switch (targetName){
            case "firstName":
                return {
                    errorMsg : targetValue.length === 1 ? "First name must be at least two characters." : "", 
                    isValid: targetValue.length > 1 ? true : false
                }
            case "lastName":
                return {
                    errorMsg: targetValue.length === 1 ? "Last name must be at least two characters." : "",
                    isValid: targetValue.length > 1 ? true : false
                }
            case "email":
                return {
                    errorMsg: targetValue.length === 0 || targetValue.length > 4 ? "" : "Email must be at least five characters.",
                    isValid: targetValue.length > 4 ? true : false
                }
            case "password" :
                return {
                    errorMsg: targetValue.length === 0 || targetValue.length > 7 ? "" : "Password must be at least eight characters.",
                    isValid: targetValue.length > 7 ? true : false
                }
            case "confirmPassword" :
                return {
                    errorMsg: targetValue.length === 0 || targetValue === state.password ? "" : "Passwords do not match.", 
                    isValid : targetValue === state.password && targetValue.length !==0 ? true : false
                }
            default:
                return {};
        }
    }
   
    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstName: state.firstName, lastName: state.lastName, email: state.email, password: state.password};
        setState({...initialState, user:newUser, hasBeenSubmitted:true});
    };

    const logout = () => {
        setState(initialState);
    }
    
    return(
        <div className="container d-flex justify-content-center gap-5">
            {state.hasBeenSubmitted ? <h1>Welcome {state.user.firstName}</h1> :
            <div className="justify-content-center form-div">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Login Form</h4>
                        </div>
                        <div className="card-body">
                        <form className="register-form" onSubmit={createUser}>
                            <div className="mb-3">
                                <label htmlFor="first_name" className="form-label">First Name</label>
                                <input type="text" className="form-control" name="firstName" id="first_name" value={state.firstName} onChange={ handleInput } required />
                                {state.firstNameError ? <p>{state.firstNameError}</p> : ""}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="last_name" className="form-label">Last Name</label>
                                <input type="text" className="form-control" name="lastName" id="last_name" value={state.lastName} onChange={ handleInput } required />
                                {state.lastNameError ? <p>{state.lastNameError}</p> : ""}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" id="email" value={state.email} onChange={ handleInput } required />
                                {state.emailError ? <p>{state.emailError}</p> : ""}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" id="password" value={state.password} onChange={ handleInput } required />
                                {state.passwordError ? <p>{state.passwordError}</p> : ""}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" name="confirmPassword" id="confirm_password" value={state.confirmPassword} onChange={ handleInput } required />
                                {state.confirmPasswordError ? <p>{state.confirmPasswordError}</p> : ""}
                            </div>
                            {                              
                              state.hasFirstName && state.hasLastName && state.hasEmail && state.hasPassword && state.hasConfirmPassword ?
                              <button type="submit" className="btn btn-submit mb-3" >Register</button> : 
                              <button type="submit" className="btn btn-submit mb-3" disabled>Register</button>
                            }
                        </form>
                        </div>
                    </div>
                </div>
            </div>}
            <div className="justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Your Form Data</h4>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <p>First Name : {state.hasBeenSubmitted ? state.user.firstName : state.firstName}</p>
                            </div>
                            <div className="mb-3">
                                <p>Last Name : {state.hasBeenSubmitted ? state.user.lastName : state.lastName}</p>
                            </div>
                            <div className="mb-3">
                                <p>Email : {state.hasBeenSubmitted ? state.user.email : state.email}</p>
                            </div>
                            <div className="mb-3">
                                <p>Password : {state.hasBeenSubmitted ? state.user.password : state.password}</p>   
                            </div>
                            {!state.hasBeenSubmitted ?
                                <div className="mb-3">
                                    <p>Confirm Password : {state.confirmPassword}</p>   
                                </div> : 
                                <div>
                                    <button className="btn btn-submit mb-3" onClick={logout} >Logout</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
    
export default UserFormObject;