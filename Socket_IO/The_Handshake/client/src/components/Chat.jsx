import React, {useState, useEffect} from 'react';
import io from 'socket.io-client'

const Chat = () => {
    const [socket] = useState(()=>io(':8000'));

    useEffect(() => {
        socket.on('Welcome', data => console.log(data));
        return () => socket.off("Welcome");
    }, [socket]);

    return (
        <div>
            <h1>Socket Test</h1>
        </div>
    )
}

export default Chat