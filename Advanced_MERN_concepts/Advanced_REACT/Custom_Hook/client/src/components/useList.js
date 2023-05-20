import {useState} from 'react';

export default (initialList = []) => {
    const [list, setList] = useState(initialList);

    const add = data => setList([...list, data]);
    const remove = index => setList([...list.slice(0, index), ...list.slice(index+1)]);

    return {list, add, remove};
}