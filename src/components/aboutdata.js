import React from 'react';
import './aboutdata.css'; // Ensure this file is linked to the CSS below
import { FaDatabase } from 'react-icons/fa'; // Importing the database icon

function AboutData() {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-header">
          <FaDatabase size={24} className="database-icon" />
          <h2>About the Data</h2>
        </div>
        <p>Write ~150 to 200 word introduction to your chosen data set...</p>
      </div>
    </div>
  );
}

export default AboutData;
