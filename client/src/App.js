import React from 'react';
import WorkExpierence from './components/WorkExpierence';
import RegularList from './components/RegularList';
import Education from './components/Education';
import ResumeHeader from './components/ResumeHeader';
import { ResumeView } from './components/ResumeView';
import axios from 'axios';
// import { ResumeMain } from './components/ResumeMain';

const workExpierence = [
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

const education = [
  {
    subheader: "HBO - Cretive Business",
    years: "2005 - 2015",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente aliquid minima, sint ratione sunt et at voluptate repudiandae ea sit sequi odit accusantium consequuntur. Est amet quisquam dolorum esse harum!"
  },
  {
    subheader: "Media Graphic Designer",
    years: "2005 - 2015",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente aliquid minima, sint ratione sunt et at voluptate repudiandae ea sit sequi odit accusantium consequuntur. Est amet quisquam dolorum esse harum!"
  },
  {
    subheader: "Something else",
    years: "2005 - 2015",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente aliquid minima, sint ratione sunt et at voluptate repudiandae ea sit sequi odit accusantium consequuntur. Est amet quisquam dolorum esse harum!"
  },
];

const headerInfo = 
  {
    avatar: "https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg",
    name: "EMMA WILLIAMS",
    title: "GRAPHIC DESIGNER",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat suscipit, doloribus magnam odio totam aperiam sunt expedita nesciunt! Adipisci corrupti ducimus voluptatibus exercitationem, praesentium architecto perspiciatis ratione distinctio deleniti minus.",
    contactInfo: [
      {email: "emial@email.com"},
      {phone: "08888888"},
      {website: "website.com"},
      {linkedIn: "Emma Williams"},
    ]
  }



function App() {
  axios.get('http://localhost:3000/posts')
  .then(function (response) {
    console.log(response);
  })
  return (
    <>
      <ResumeHeader info={headerInfo} />
      {/* <ResumeMain info={} /> */}
    </>
  );
}

export default App;
