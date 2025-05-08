import React from 'react';
import './Preloader.css'; // We'll create this CSS file next

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader-inner">
        <div className="preloader-circle"></div>
        <div className="preloader-circle"></div>
        <div className="preloader-circle"></div>
        <div className="preloader-circle"></div>
        <div className="preloader-circle"></div>
      </div>
    </div>
  );
}

export default Preloader;
