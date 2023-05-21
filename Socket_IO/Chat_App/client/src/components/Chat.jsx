import React, {useState, useEffect} from 'react';
import io from 'socket.io-client'

const Chat = ({name}) => {
    const [socket] = useState(()=>io(':8000'));
    const [messages, setMessages] = useState([]);
    const initialState = {
        from: name,
        msg: "",
        id: socket.id
    }
    const [formInput, setFormInput] = useState(initialState);
    
    useEffect(() => {
        socket.on('WELCOME_MESSAGE', data => {
            console.log(data, 'Your socket id is', socket.id)
            socket.emit("JOIN_MESSAGE", {joined:name});
            setFormInput(prevState => {
                return {...prevState, id:socket.id}
            })
        });
        return () => socket.off("WELCOME_MESSAGE");
    }, [socket]);

    useEffect(() => {
        socket.on("NEW_MESSAGE", msg => {
            console.log('running man')
            setMessages(prevMessages => {
                return [...prevMessages, msg];
            });
        });
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        socket.emit("SEND_MESSAGE", formInput);
        setMessages([...messages, formInput]);
        setFormInput(initialState);
    }

    const handleInput = e => {
        setFormInput({...formInput, msg: e.target.value});
    }

    return (
        <div className='vh-100'>
            <div className='h-75 border border-black m-5 '>
                <div className='h-75 border border-black mx-2 mt-2 p-2' style={{overflowY:'auto'}}>
                    {messages.map((msg, i) => (
                        <div key={i} className='text-start'>
                            <div className="row justify-content-between">
                                <div className="col-4">
                                    {msg.id !== socket.id && (
                                        <div className='p-2 mb-2 text-break' style={{backgroundColor:'lightblue'}}>
                                            <p>{msg.from} says,</p>
                                            <p>{msg.msg}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="col-4">
                                    {msg.id === socket.id && (
                                        <div className='p-2 mb-2 text-break' style={{backgroundColor:'lightgreen'}}>
                                            <p>{msg.from} says,</p>
                                            <p>{msg.msg}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='row mx-2 mt-4 py-3 border border-black'>
                    <p className='text-start'>Chatting as {name}</p>
                    <form className='d-flex align-items-center' onSubmit={handleSubmit}>
                        <input className="col-8" type="text" id='name' value={formInput.msg} onChange={handleInput} />
                        <button className='col-3 offset-1 btn btn-primary'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Chat