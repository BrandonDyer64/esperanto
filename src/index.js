import React from 'react'
import ReactDOM from 'react-dom'
import './Stiloj/Cxefo.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import noscript from './Noscript'

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, document.getElementById('root'))
} else {
  noscript.test = true
  ReactDOM.render(<App />, document.getElementById('root'))
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
