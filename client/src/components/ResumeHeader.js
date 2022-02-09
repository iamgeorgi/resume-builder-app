import React from 'react';
import ListIterator from './ListIterator';
import ContactInfo from './ContactInfo';

const ResumeHeader = ({ info }) => {
    const { avatar, name, title, bio, contactInfo } = info;

    return (
        info && Object.keys(info).length !== 0 ? (
            <>
                <div className='my-5 flex'>
                    <div className='w-1/3 p-5 m-auto'>
                        <div className='bg-cover bg-center h-44 w-44 rounded-full border-pink-300 border-10' style={{ backgroundImage: `url("${avatar}"` }}>
                        </div>
                    </div>
                    <div className='w-2/3'>
                        <h2 className='pb-0.5'>{name}</h2>
                        <h4 className='pb-5'>{title}</h4>
                        <p className='pb-5'>{bio}</p>
                        <ListIterator 
                            data={contactInfo} 
                            itemName="contacts" 
                            itemComponent={ContactInfo}
                            extraClasses="flex flex-wrap w-full" 
                        />
                    </div>
                </div>
            </>
        )
            : <div>Loading...</div>

    )
}

export default ResumeHeader;