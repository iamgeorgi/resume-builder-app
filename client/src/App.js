import React, { useState, useEffect } from 'react';
import WorkExpierence from './components/WorkExpierenceItem';
import RegularList from './components/ListIterator';
import Education from './components/EducationItem';
import ResumeHeader from './components/ResumeHeader';
import { ResumeView } from './components/ResumeView';
import axios from 'axios';
import { ResumeMain } from './components/ResumeMain';

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
      <ResumeHeader info={headerData} />
      <ResumeMain info={infoSectionData} />
    </>
  );
}

export default App;
