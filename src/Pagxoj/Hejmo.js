import React from 'react'

import Sekcio from '../Aferoj/Sekcio'
import cxenoj from '../Okazejoj'

import { Row, Col } from 'react-bootstrap'

export default class Hejmo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <Sekcio dark={true}>
          <Row>
            <Col lg='6'>
              <h2>{cxenoj.KioEstasEsperanto}</h2>
              <p>{cxenoj.KioEstasEsperanto_}</p>
            </Col>
            <Col lg='6'>
              <h2>{cxenoj.KielGxiLaboras}</h2>
              <p>{cxenoj.KielGxiLaboras_}</p>
            </Col>
          </Row>
        </Sekcio>
        <Sekcio dark={false}>
          <Row>
            <Col lg='6'>
              <div class='video-container'>
                <iframe
                  id='ytplayer'
                  type='text/html'
                  width='640'
                  height='360'
                  src={
                    `https://www.youtube.com/embed/8gSAkUOElsg?autoplay=0&rel=0` +
                    `&cc_lang_pref=${cxenoj.getLanguage()}` +
                    `&hl=${cxenoj.getLanguage()}` +
                    `${cxenoj.getLanguage() != 'en' ? '&cc_load_policy=1' : ''}`
                  }
                  style={{ maxWidth: '100%' }}
                  frameborder='0'
                />
              </div>
            </Col>
            <Col lg='6'>
              <h2>{cxenoj.KialEsperanto}</h2>
              <p className='justify'>{cxenoj.Citajxo}</p>
              <p style={{ textAlign: 'center' }}>-- L. L. Zamenhof, 1912</p>
            </Col>
          </Row>
        </Sekcio>
      </>
    )
  }
}
