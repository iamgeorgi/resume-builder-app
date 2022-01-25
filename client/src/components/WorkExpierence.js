import React from 'react';

const WorkExpierence = ({ workExpierenceInfo }) => {
    const { subheader, description } = workExpierenceInfo;
    return (
        <>
            <div className='my-5'>
                <h4>{subheader}</h4>
                <p>{description}</p>
            </div>
        </>
    )
}

export default WorkExpierence;