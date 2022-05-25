import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders'

const promise = loadStripe("pk_test_51L1kT6A7h47aBarN0vzpcfGePCNrFT5Vq1SKcRWSI1IpkgUDoP57kBmz2p0rA0nXERaFEclQs0ZaQ8UTOnlwS29j00OnPRDFyW");


function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // Will run once when componenet loads.
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser);
      if (authUser) {
        // User just logged in/ User was logged in.
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        // User is logged out.
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/orders' element={<Orders />} />
          <Route path='/login' element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Elements stripe={promise}><Payment /></Elements>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
