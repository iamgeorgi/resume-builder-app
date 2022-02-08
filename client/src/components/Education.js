import React from 'react';
import ListIterator from './ListIterator';
import EducationItem from './EducationItem';

export const Education = ({ info, message }) => {
    const { education } = info;
    return (
        info && Object.keys(info).length !== 0 ?
        <>
            <h2>Education</h2>
            <ListIterator
                data={education}
                itemName="education"
                itemComponent={EducationItem}
            />
        </>
        : <div>Loading</div>
    )
}
