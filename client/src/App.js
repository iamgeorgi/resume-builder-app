import React from 'react';
import WorkExpierence from './components/WorkExpierence';
import RegularList from './components/RegularList';

const demoData = [
  {
    subheader: "2014 - 2019, Kruisender, Etten-Lour",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente aliquid minima, sint ratione sunt et at voluptate repudiandae ea sit sequi odit accusantium consequuntur. Est amet quisquam dolorum esse harum!"
  },
  {
    subheader: "2015 - 2017, Kruisender, Etten-Lour",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente aliquid minima, sint ratione sunt et at voluptate repudiandae ea sit sequi odit accusantium consequuntur. Est amet quisquam dolorum esse harum!"
  },
  {
    subheader: "2017 - 2019, Kruisender, Etten-Lour",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente aliquid minima, sint ratione sunt et at voluptate repudiandae ea sit sequi odit accusantium consequuntur. Est amet quisquam dolorum esse harum!"
  },
]

function App() {

  return (
    <>
      <div className="w-1/2 p-10">
        <RegularList data={demoData} itemName="workExpierenceInfo" itemComponent={WorkExpierence} title="Work Expierence" />
      </div>
    </>
  );
}

export default App;
