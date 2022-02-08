import React, { useState } from 'react';

export const ResumeMain = ({ info, children }) => {
    return (
        <>
            {React.Children.map(children,
                child => {
                    const matchComponentWithData = Object.entries(info)
                        .find(data => {
                            const dataName = data[0];
                            return dataName.toLowerCase() === child.type.name.toLowerCase()
                        });
                    if (!matchComponentWithData) {
                        return;
                    }
                    return (
                        <div className='section-item'>
                            {React.cloneElement(child, {info}, null)}
                        </div>
                    );
                })}
        </>
    )
};