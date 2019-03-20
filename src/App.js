import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Navbaro from './Aferoj/Navbaro'
import Sekcio from './Aferoj/Sekcio'
import './Stiloj/App.css'

import Hejmo from './Pagxoj/Hejmo'
import Lerni from './Pagxoj/Lerni'

import cxenoj from './Okazejoj'

class App extends Component {
  constructor(props) {
    super(props)
    let okazejo = localStorage.getItem('okazejo')
    if (okazejo) {
      this.fiksuLingvon(okazejo)
    }
  }

  fiksuLingvon(k) {
    cxenoj.setLanguage(k)
    localStorage.setItem('okazejo', k)
    this.setState({})
  }

  render() {
    return (
      <Router>
        <>
          <Navbaro fiksuLingvon={k => this.fiksuLingvon(k)} />
          <Route exact path='/' component={Hejmo} />
          <Route path='/lerni' component={Lerni} />
        </>
      </Router>
    )
  }
}

export default App
