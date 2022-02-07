import React from 'react';
import { Education } from './Education';
import { WorkExpierence } from './WorkExpierence';


export const ResumeMain = ({ info }) => {
    
    return (
        <>
            <WorkExpierence info={info} />
            <Education info={info} />
        </>
    )
};