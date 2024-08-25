import React from 'react';
import Header from './components/header';
import ContentArea from './components/contentarea';
// import ImageBoxes from './components/imageboxs';
// import AboutData from './components/aboutdata';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <ContentArea/>
      {/* <AboutData/> */}

      <Footer />
    </div>
  );
}

export default App;