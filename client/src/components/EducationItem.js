import React from 'react';

const EducationItem = ({ education }) => {
    const { subheader, years, description } = education;
    return (
        <>
            <div className='my-5'>
                <h4>{subheader}</h4>
                <h5>{years}</h5>
                <p>{description}</p>
            </div>
        </>
    )
}

export default EducationItem;