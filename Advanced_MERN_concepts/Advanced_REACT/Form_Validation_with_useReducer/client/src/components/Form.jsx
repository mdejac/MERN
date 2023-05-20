import React, {useReducer} from 'react';

const initialState = {
  firstName : {
    value :"",
    error : null
  },
  lastName : {
    value :"",
    error : null
  },
  email : {
    value :"",
    error : null
  },
  hasBeenSubmitted : false
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return {...state, email: {...state.email, value: action.payload}}  
    case "SET_EMAIL_ERROR":
      return {...state, email: {...state.email, error: action.payload}}
    case "SET_FIRSTNAME":
      return {...state, firstName: {...state.firstName, value :action.payload}}
    case "SET_FIRSTNAME_ERROR":
      return {...state, firstName: {...state.firstName, error :action.payload}}
    case "SET_LASTNAME":
      return {...state, lastName: {...state.lastName, value :action.payload}}
    case "SET_LASTNAME_ERROR":
      return {...state, lastName: {...state.lastName, error :action.payload}}
    case "SET_SUBMITTED_BOOLEAN":
      return {...initialState, hasBeenSubmitted: action.payload}
    default :
      return state
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onSubmitHandler = e => {
    e.preventDefault();
    let hasErrors = false;
    for (const key in state){
      if (state[key].error != null || state[key].value == ""){
        hasErrors = true
      }
    }
    !hasErrors && dispatch({type:"SET_SUBMITTED_BOOLEAN", payload:true})
  }

  const validateEmail = data => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data);
  
  const handleInput = e => {
    switch (e.target.id) {
      case 'firstName':
        dispatch({type: "SET_FIRSTNAME_ERROR", payload: e.target.value.length > 2 || e.target.value.length === 0 ? null : "First name must be greater than two characters"})
        dispatch({type: "SET_FIRSTNAME", payload: e.target.value})
        break;
      case 'lastName':
        dispatch({type: "SET_LASTNAME_ERROR", payload: e.target.value.length > 2 || e.target.value.length === 0 ? null : "Last name must be greater than two characters"})
        dispatch({type: "SET_LASTNAME", payload: e.target.value})
        break;
      case 'email' :
        dispatch({type: "SET_EMAIL_ERROR", payload: validateEmail(e.target.value) || e.target.value.length === 0 ? null :"Valid email address required."})
        dispatch({type: "SET_EMAIL", payload: e.target.value})
        break;
      default: break;
    }
  }

  return (
    <div className='row'>
      <form className='col-md-8 mx-auto mt-5 border border-black p-3' onSubmit={onSubmitHandler}>
          {state.hasBeenSubmitted && <h3>Form has been submitted.</h3>}
          <div className="row mb-2">
              {state.firstName.error !== null && <p>{state.firstName.error}</p>}
              <label className='col-md-4 col-form-label' htmlFor="firstName">First name :</label>
              <div className="col-md-8">
                  <input className='form-control' type="text" id='firstName' value={state.firstName.value} onChange={e => handleInput(e)} />
              </div>
          </div>

          <div className="row mb-2">
              {state.lastName.error !== null && <p>{state.lastName.error}</p>}
              <label className='col-md-4 col-form-label' htmlFor="lastName">Last Name :</label>
              <div className="col-md-8">
                  <input className='form-control' type="text" id='lastName' value={state.lastName.value} onChange={e =>handleInput(e)} />
              </div>
          </div>

          <div className="row mb-2">
              {state.email.error !== null && <p>{state.email.error}</p>}
              <label className='col-md-4 col-form-label' htmlFor="email">Email :</label>
              <div className="col-md-8">
                  <input className='form-control' type="text" id='email' value={state.email.value} onChange={e => handleInput(e)} />
              </div>
          </div>

          <div className='text-end'>
              {!state.hasBeenSubmitted && <button className='btn btn-success ms-5' type='submit'>Add</button>}
          </div>
      </form>
  </div>
    
  )
}