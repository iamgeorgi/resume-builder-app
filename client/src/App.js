import React, { useState, useEffect } from 'react';
import ResumeHeader from './components/ResumeHeader';
import axios from 'axios';
import { ResumeMain } from './components/ResumeMain';
import { Education } from './components/Education';
import { WorkExpierence } from './components/WorkExpierence';
import { Languages } from './components/Languages';
import { ResumeView } from './components/ResumeView';

function App() {
  const [headerData, setHeaderData] = useState({});
  const [infoSectionData, setInfoSectionData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/headerInfo')
      .then(function (response) {
        getData(response.data, headerData, setHeaderData);
      })
      .then(() => console.log('headerData', headerData))
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3000/sectionInfo')
      .then(function (response) {
        getData(response.data, infoSectionData, setInfoSectionData);
      })
      .then(() => console.log('infoSectionData', infoSectionData))
  }, []);

  const getData = (data, getter, setter) => {
    setter(data);
    return getter;
  }

  return (
    <>
      <ResumeView>
        <ResumeHeader info={headerData} />
        <ResumeMain info={infoSectionData}>
          <Education />
          <WorkExpierence />
          <Languages />
        </ResumeMain>
      </ResumeView>
    </>
  );
}

export default App;
