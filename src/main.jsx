import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Greeting from './Greetings.jsx'
import Nav from './Nav.jsx'
import Buttons from './Buttons.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <Nav/>
    <Buttons/>
    <Buttons/>
    <Buttons/>

  </React.StrictMode>,
)
