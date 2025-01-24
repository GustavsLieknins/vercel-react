import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <div className="main-container" style={{ 
      backgroundImage: "linear-gradient(to right, #ffb347, #ffcc33)", 
      border: "5px dashed black",
      borderRadius: "15px",
      padding: "20px",
      transform: "rotate(5deg)"
    }}>
      <p className="main-text" style={{ 
        fontSize: "25px", 
        fontFamily: "Comic Sans MS", 
        color: "white", 
        textShadow: "2px 2px black"
      }}>
        Kas ir prasības? Prasības ir izpratnes par to, ko darbinieks vai organizācija
        vēlas panākt, lai uzlabotu savu darbību vai pakalpojumu.
      </p>
      <p className="main-text" style={{ 
        fontSize: "25px", 
        fontFamily: "Comic Sans MS", 
        color: "white", 
        textShadow: "2px 2px black"
      }}>
        Kas ir prasību specifikācija? Prasību specifikācija ir detalizēta informācija
        par prasībām, kas tiek izmantotas, lai izveidotu vai uzlabotu
        sistēmu, produktu vai pakalpojumu.
      </p>
      <p className="main-text" style={{ 
        fontSize: "25px", 
        fontFamily: "Comic Sans MS", 
        color: "white", 
        textShadow: "2px 2px black"
      }}>
        Un ar ko viena atšķirās no otras? Katra prasība ir unikāla un atšķiras no
        citām ar savu saturu, mērķi un prioritāti.
      </p>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

