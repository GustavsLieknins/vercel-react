import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <p style={{
      textAlign: 'center',
      fontSize: '1.5em',
      margin: '30px 0',
      color: '#4A90E2',
      backgroundColor: '#F5F5F5',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      lineHeight: '1.6'
    }}>
      Kas ir prasības? Prasības ir izpratnes par to, ko darbinieks vai organizācija
      vēlas panākt, lai uzlabotu savu darbību vai pakalpojumu. <br /><br />
      Kas ir prasību specifikācija? Prasību specifikācija ir detalizēta informācija
      par prasībām, kas tiek izmantotas, lai izveidotu vai uzlabotu
      sistēmu, produktu vai pakalpojumu. <br /><br />
      Un ar ko viena atšķirās no otras? Katra prasība ir unikāla un atšķiras no
      citām ar savu saturu, mērķi un prioritāti.
    </p>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
