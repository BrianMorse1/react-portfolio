import React from 'react';
import { saveAs } from 'file-saver';
import Resume from '../assets/resume.jpg';

const MyResume = () => {
  const handleDownload = () => {
    saveAs(Resume, 'resume.jpg');
  };

  return (
    <div id='resume'>
      <img src={Resume} alt="Resume" />
      <button onClick={handleDownload}>Download</button>
    </div>
  );
}

export default MyResume;
