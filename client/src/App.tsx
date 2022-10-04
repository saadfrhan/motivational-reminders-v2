import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import React from 'react';
import Routes from './routes';
import FooterNav from './containers/footerNav';
import NavBar from './containers/navBar/navBar';

function App() {


  return (<Router>
    <div className='App'>

      <NavBar />

      <div className='main'>
        <Routes />
      </div>

      <FooterNav />
    </div>
  </Router >
  );
}

export default App;
