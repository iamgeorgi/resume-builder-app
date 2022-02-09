import React from 'react';

const ContactInfo = ({ contacts }) => {
    const currentContact = {...contacts};
    
    return (
        <>
            <div className='my-0.5 w-1/2'>
                <p><span className='font-bold'>{Object.keys(currentContact)[0]}: </span>{Object.values(currentContact)[0]}</p>
            </div>
        </>
    )
}

export default ContactInfo;