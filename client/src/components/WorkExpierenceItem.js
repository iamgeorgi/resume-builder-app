import React from 'react';

const WorkExpierenceItem = ({ workExpierence }) => {
    const { subheader, description } = workExpierence;
    return (
        <>
            <div className='my-5'>
                <h4>{subheader}</h4>
                <p>{description}</p>
            </div>
        </>
    )
}

export default WorkExpierenceItem;