import React from 'react'

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

class Respondo extends React.Component {
  constructor(props) {
    super(props)
    let html = []
    for (var i in this.props.text) {
      const letter = this.props.text[i]
      if (letter != ' ') html.push(<span>{letter}</span>)
      else html.push(<span>&nbsp;</span>)
    }
    this.state = {
      html
    }
  }
  render() {
    return (
      <div
        className='lerniTeksto lerniRespondo'
        style={{
          width: '50%',
          height: '50%',
          margin: '0px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'no-wrap',
          alignItems: 'center',
          backgroundColor: `var(--${this.props.color}-dark)`
        }}
      >
        {this.state.html}
      </div>
    )
  }
}

export default class Demando extends React.Component {
  constructor(props) {
    super(props)
    const koloroj = ['purple', 'green', 'blue', 'teal', 'orange', 'nokto']
    const respondoj = []
    const respondajTekstoj = ['Hello!', 'Hi!', 'Hello everyone!', "What's up?"]
    shuffleArray(respondajTekstoj)
    for (var i = 0; i < 4; i++) {
      const koloraSxlosilo = Math.floor(Math.random() * koloroj.length)
      respondoj.push(
        <Respondo text={respondajTekstoj[i]} color={koloroj[koloraSxlosilo]} />
      )
      koloroj.splice(koloraSxlosilo, 1)
    }
    this.respondoj = respondoj
  }
  render() {
    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          position: 'relative'
        }}
      >
        {this.respondoj}
        <div
          className='lerniTeksto lerniDemando'
          style={{
            width: '100%',
            position: 'absolute',
            left: '0',
            boxSizing: 'border-box'
          }}
        >
          Saluton al ĉiuj!
        </div>
      </div>
    )
  }
}
