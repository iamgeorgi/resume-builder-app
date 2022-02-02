import React from 'react';

const RegularList = ({ data, itemName, itemComponent: ItemComponent, title }) => {
    return (
        <>
            {title ? <h3>{title}</h3> : null}
            {data.map((info, index) => <ItemComponent key={index} {...{ [itemName]: info }} />)}
        </>
    )
}

export default RegularList;