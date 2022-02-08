import React from 'react';
import WorkExpierenceItem from './WorkExpierenceItem';
import ListIterator from './ListIterator';

export const WorkExpierence = ({ info }) => {
    const { workExpierence } = info;
    return (
        info && Object.keys(info).length !== 0 ?
        <>
            <h2>Work Expierence</h2>
            <ListIterator
                data={workExpierence}
                itemName="workExpierence"
                itemComponent={WorkExpierenceItem}
            />
        </>
        : <div>Loading</div>
    )
}
