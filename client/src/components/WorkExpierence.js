import React from 'react';
import WorkExpierenceItem from './WorkExpierenceItem';
import ListIterator from './ListIterator';

export const WorkExpierence = ({ info }) => {
    const { workExpierence } = info;
    return (
        <>
            <h2>Work Expierence</h2>
            <ListIterator
                data={workExpierence}
                itemName="workExpierence"
                itemComponent={WorkExpierenceItem}
            />
        </>
    )
}
