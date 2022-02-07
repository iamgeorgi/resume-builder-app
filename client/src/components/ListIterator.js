import React from 'react';

const ListIterator = ({ data, itemName, itemComponent: ItemComponent }) => {
    return (
        <>
            {data.map((info, index) => <ItemComponent key={index} {...{ [itemName]: info }} />)}
        </>
    )
}

export default ListIterator;