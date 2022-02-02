import React from 'react';
import RegularList from './RegularList';
import ContactInfo from './ContactInfo';

const ResumeHeader = ({ info }) => {
    const { avatar, name, title, bio, contactInfo } = info;
    console.log('avatar', avatar);
    const avatarImage = "bg-[url('" + avatar + "')]";
   
    return (
        <>
            <div className='my-5 flex'>
                <div className='w-1/3'>
                    <div className={avatarImage}>
                    </div>
                </div>
                <div className='w-2/3'>
                    <h2>{name}</h2>
                    <h4>{title}</h4>
                    <p>{bio}</p>
                    <RegularList data={contactInfo} itemName="contacts" itemComponent={ContactInfo} />
                </div>
            </div>
        </>
    )
}

export default ResumeHeader;