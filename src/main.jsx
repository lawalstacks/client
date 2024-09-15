import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import {RecoilRoot} from 'recoil';
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <GoogleOAuthProvider clientId={`523327027925-b3c7l3pkr1kq0cihjlf1c1p81smoi3kk.apps.googleusercontent.com`}>
    <App />
        </GoogleOAuthProvider>
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
)
