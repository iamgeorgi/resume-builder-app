import React from 'react';
import ListIterator from './ListIterator';
import EducationItem from './EducationItem';

export const Education = ({ info }) => {
    const { education } = info;
    return (
        <>
            <h2>Education</h2>
            <ListIterator
                data={education}
                itemName="education"
                itemComponent={EducationItem}
            />
        </>
    )
}
