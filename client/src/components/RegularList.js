import React from 'react';

const RegularList = ({ data, itemName, itemComponent: ItemComponent, title }) => {
    return (
            <div className="w-full h-auto bg-pink-300 px-8 py-5">
                {title ? <h3>{title}</h3> : null}
                {data.map((info, index) => <ItemComponent key={index} {...{ [itemName]: info }} />)}
            </div>
    )
}

export default RegularList;