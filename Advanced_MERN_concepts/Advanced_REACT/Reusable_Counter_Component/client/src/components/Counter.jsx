import React, {useState} from 'react'

export default ({render, initialValue = 0}) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return render({count, increment, decrement});
}