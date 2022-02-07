import React, { useState, useEffect } from 'react';
import WorkExpierence from './components/WorkExpierence';
import RegularList from './components/RegularList';
import Education from './components/Education';
import ResumeHeader from './components/ResumeHeader';
import { ResumeView } from './components/ResumeView';
import axios from 'axios';
// import { ResumeMain } from './components/ResumeMain';

function App() {
  const [headerData, setHeaderData] = useState({});
  
  const getHeaderData = (data, getter, setter) => {
    setter(data);
    return getter;
  }

  useEffect(() => {
    axios.get('http://localhost:3000/headerInfo')
    .then(function (response) {
      getHeaderData(response.data, headerData, setHeaderData);
    })
  }, []);

  return (
    <>
      <ResumeHeader info={headerData} />
    </>
  );
}

export default App;
