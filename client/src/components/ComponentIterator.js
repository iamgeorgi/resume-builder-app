import React from 'react';

export const ComponentIterator = ({ children, info }) => {
    console.log(children);
    // const TagName = components.Education;
    // const { ToReactComponent } = Object.entries(components).reduce((acc, value) => {
    //     const ToReactComponent = React.cloneElement(components[value[0]], { info: info });
    //     return {...acc, ToReactComponent};
    // }, {});
    // console.log('ToReactComponent', ToReactComponent);
    // const test = React.cloneElement(components.Education, { info: info });
    // console.log(test);
    return (
        <div>
        {React.Children.map(children,
          child => {
            console.log('children', children);
            console.log('child', child);
            return React.cloneElement(child,
              { info }, null); //third parameter is null
              // Because we are not adding any children
          })}
        </div>
    )
};