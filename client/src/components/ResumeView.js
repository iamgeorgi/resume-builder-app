import React from 'react';

export const ResumeView = ({ children }) => {
    const [header, main] = children;
    return (
        <div className='a4-size mx-auto p-10 bg-slate-50'>
            <div className="w-full p-5 bg-white">
                {header}
            </div>
            <div className="p-10 bg-pink-300 flex h-3/4">
                {main}
            </div>
        </div>
    )
};