import React, {useState} from 'react'

const Tab = ({allMessages, setDisplayMessage }) => {
    const [clickedTab, setClickedTab] = useState(-1);

    return (
    <div className='d-flex justify-content-center'>
        {allMessages.map((msg, i) => (<p className='p-3 border border-black m-2 tab' style={{backgroundColor: i === clickedTab ? "lightgray" : "white"}} onClick={e => {setDisplayMessage(msg.content); setClickedTab(i)}}>{msg.label}</p>))}
    </div>
    )
}

export default Tab