import React from 'react';

const ListIterator = ({ data, itemName, itemComponent: ItemComponent, ...props }) => {
    // console.log('props', props.extraClasses);
    return (
        <div className={`-mt-3 ${props.extraClasses ? props.extraClasses : ''}`}>
            {data.map((info, index) => <ItemComponent key={index} {...{ [itemName]: info }} />)}
        </div>
    )
}

export default ListIterator;