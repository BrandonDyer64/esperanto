import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Navbaro from './Aferoj/Navbaro'
import Sekcio from './Aferoj/Sekcio'
import './Stiloj/App.css'

import cxefoj from './Okazejoj'

class App extends Component {
  constructor(props) {
    super(props)
    let okazejo = localStorage.getItem('okazejo')
    if (okazejo) {
      this.fiksuLingvon(okazejo)
    }
  }

  fiksuLingvon(k) {
    cxefoj.setLanguage(k)
    localStorage.setItem('okazejo', k)
    console.log(cxefoj.hejmo)
    this.setState({})
  }

  render() {
    return (
      <Router>
        <>
          <Navbaro fiksuLingvon={this.fiksuLingvon} />
        </>
      </Router>
    )
  }
}

export default App
