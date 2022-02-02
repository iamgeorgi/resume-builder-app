import React from 'react';

export const ResumeView = ({ children }) => {
    const [header, main] = children;

    return (
        <div className='flex flex-wrap'>
            <div className="w-1/2 p-10">
                {header}
            </div>
            <div className="w-1/2 p-10">
                {main}
            </div>
        </div>
    )
};