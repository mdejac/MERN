import React from 'react'

const DisplayTasks = ({todoList, setTodoList}) => {

    const handleDelete = id => {
        setTodoList(prevState => prevState.filter(task => task.id !== id));
    }

    const handleComplete = id => {
        setTodoList(prevState => prevState.map(task => task.id === id ? {...task, completed: !task.completed} : task));
    }

    return (
        <div className='row mt-2'>
            <div className='col-md-8 offset-2 border border-black p-3'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Mark Completed</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {todoList.map(task => (
                            <tr key={task.id}>
                                <td style={{textDecoration: task.completed === true ? "line-through" : ""}}>
                                    {task.text}
                                </td>
                                <td>
                                    <input className="form-check-input" type="checkbox" value="" checked={task.completed} onChange={e => handleComplete(task.id)} />
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={e => handleDelete(task.id)}>Delete</button>
                                </td>
                            </tr>    
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DisplayTasks