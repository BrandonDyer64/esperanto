import React from 'react'

import Sekcio from '../../Aferoj/Sekcio'
import cxenoj from '../../Okazejoj'

import { Row, Col, Card, Container } from 'react-bootstrap'

import Demando from './Demando'

export default class Hejmo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      demando: <Demando />
    }
  }
  render() {
    return <div className='lerniContainer'>{this.state.demando}</div>
  }
}
