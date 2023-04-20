import React, {useState} from 'react'

const GenerateBox = () => {
    const initialState = {
        color: "",
        height: 50,
        width: 50,
        colorError: "",
        heightError : "",
        widthError: "",
        boxes: []
    }
    const [state, setState] = useState(initialState);

    const drawBox = e => {
        e.preventDefault();
        if (state.colorError || state.heightError || state.widthError){
            return
        }
        const box = {
            color : state.color,
            height : state.height+"px",
            width : state.width+"px"
        }
        setState({...initialState, boxes:[...state.boxes, box]});
    }

    return (
        <div className="container justify-content-center p-5">
            <div className="col-md-4 mx-auto card">
                <div className="card-body">
                    <form className="color-form" onSubmit={drawBox} >
                       <div className='form-group mb-3'>
                            <label htmlFor="color" className="form-label">Color
                                <input type="text" id="color" name="color" value={state.color} className="form-control" onChange={e => setState({...state, color:e.target.value, colorError:CSS.supports('color',e.target.value) ? "" : "Must enter valid color!"})} required />
                                {state.colorError ? <p>{state.colorError}</p> : "" }
                            </label>
                       </div>
                       <div className='form-group mb-3'>
                            <label htmlFor="height" className="form-label">Height (pixels)
                                <input type="number" id="height" name="height" value={state.height} className="form-control" onChange={e => setState({...state, height:e.target.value, heightError:e.target.value<50 ? "Height must be at least 50!" : ""})} required />
                                {state.heightError ? <p>{state.heightError}</p> : "" }
                            </label>
                       </div>
                       <div className='form-group mb-3'>
                            <label htmlFor="width" className="form-label">Width (pixels)
                                <input type="number" id="width" name="width" value={state.width} className="form-control" onChange={e => setState({...state, width:e.target.value, widthError:e.target.value<50 ? "Width must be at least 50!" : ""})} required />
                                {state.widthError ? <p>{state.widthError}</p> : "" }
                            </label>
                       </div>                       
                        <div className='form-group'>
                            <button className="btn btn-primary mx-auto" type="submit">Draw Box</button>
                            {state.boxes.length ? <button className="btn btn-danger ms-5" type="button" onClick={e => {e.preventDefault(); setState({...state, boxes:[]})}}>Reset</button> : ""}
                        </div>
                    </form>
                </div>
            </div>
            
            <div className='d-flex flex-wrap gap-3 mt-5'>
                {state.boxes.map( val => (<p style={{background:val.color, border:"solid 1px black", height:val.height, width:val.width}} ></p>))}  
            </div>
        </div>
    )
}

export default GenerateBox