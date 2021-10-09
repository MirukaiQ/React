import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

const ItemsList = ({getItems}) => {
    const [ items, setItems ] = useState([])

    useEffect(() => {
        const newItems = getItems()
        setItems(newItems)
        console.log("render")
    },[getItems])
    return (
        <ul>
            {items.map(i => <li key={i}>{i}</li>)}
        </ul>
    );
}

export default ItemsList;
