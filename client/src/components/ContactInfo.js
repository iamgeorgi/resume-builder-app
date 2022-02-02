import React from 'react';

const ContactInfo = ({ contacts }) => {
    const currentContact = {...contacts};
    
    return (
        <>
            <div className='my-5'>
                <p><span>{Object.keys(currentContact)[0]}</span>{Object.values(currentContact)[0]}</p>
            </div>
        </>
    )
}

export default ContactInfo;