import React from 'react';

export const ResumeMain = () => {
    return (
        <>
            <div className="w-1/2 p-10">
                <RegularList
                    title="Work Expierence"
                    data={workExpierence}
                    itemName="workExpierenceInfo"
                    itemComponent={WorkExpierence}
                />
            </div>
            <div className="w-1/2 p-10">
                <RegularList
                    title="Education"
                    data={education}
                    itemName="education"
                    itemComponent={Education}
                />
            </div>
        </>
    )
};