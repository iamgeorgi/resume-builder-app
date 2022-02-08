import React from 'react';

const ListIterator = ({ data, itemName, itemComponent: ItemComponent }) => {
    return (
        <div className='my-2'>
            {data.map((info, index) => <ItemComponent key={index} {...{ [itemName]: info }} />)}
        </div>
    )
}

export default ListIterator;