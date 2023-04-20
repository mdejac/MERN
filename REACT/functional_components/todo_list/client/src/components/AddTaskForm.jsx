import React, {useState} from 'react'

const AddTaskForm = ({addToList}) => {

    const [listInput, setListInput] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault();
        if (listInput.length){
            addToList(listInput);
            setListInput("");
        }
    }

    return (
        <div className='row mt-2'>
            <div className='col-md-6 offset-3 border border-black p-3'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='listEntryInput'>Enter new task : </label>
                        <input className='form-control mt-2' type="text" name='listEntryInput' id='listEntryInput' value={listInput} onChange={e => setListInput(e.target.value)} />
                    </div>
                    <button type='submit' className='btn btn-primary mt-2'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddTaskForm