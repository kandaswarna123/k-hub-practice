import React from 'react';
import ImageBoxes from './imageboxs';
import AboutData from './aboutdata';
import './contentarea.css';

function ContentArea() {
  return (
    <main className="content-area">
      <div className='img'>
      <ImageBoxes />
      </div>
      <div className='data'>
      <AboutData />
      </div>
    </main>
  );
}

export default ContentArea;