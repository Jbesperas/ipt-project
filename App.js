import React from 'react';
import './LostAndFound.css';

export default function LostAndFound() {
  return (
    <div className="lost-found-container">
      {/* Header */}
      <header className="header">
        <div className="logo-section">
          <img src="/UDMLOGO.png" alt="UDM Logo" className="logo" />
          <span className="title">Universidad De Manila<br></br><p>Former City College of Manila</p></span>
          <h1>Lost and Found</h1>
          
        </div>
        <nav>
          <a href="About.html" className="nav-link">About</a>
        </nav>
      </header>

      {/* Main Section */}
      <main className="main-content">
        <div className="losslogo">
          <div className="text-content">
            <h1>
            <strong>  Find <span className="highlight">IT!</span></strong>
            </h1>
            <p>Your navigation to lost & found posts.</p>
          </div>
          <br></br>
          <img src="/lostfound-icon1.jpg" alt="Lost and Found" className="loss-image" />
        </div>

        <div className="button-group">
          <a href="FileFound.html" className="btn report">File a Report <img src ="MISSINGLOGO.PNG" className ="RLogo"alt = "FileLogo"></img></a>
          <a href="FileFound.html" className="btn records">Recent Records <img src ="FILELOGO.PNG" className ="FLogo" alt = "RecordsLogo"></img></a>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          <img
            src ="/FACEBOOK.PNG"
            alt="Facebook"
            className="icon"
          />
         <a href="https://www.facebook.com/UdM.Merlions" target="_blank" rel = "noreferrer">UDM OFFICIAL PAGE</a> |              
         <a href="https://www.facebook.com/profile.php?id=100089008504274" target="_blank" rel = "noreferrer">MERLION FREEDOM WALL</a> |      
         <a href="https://www.facebook.com/official.udmssg" target="_blank" rel = "noreferrer">UDM SSG OFFICIAL PAGE</a> | 
        </p>
      </footer>
    </div>
  );
}
 