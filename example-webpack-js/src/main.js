import './style.css'
import webpackLogo from './assets/webpack.svg'
import javascriptLogo from './assets/javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = 
`
  <div>
    <a href="https://webpack.js.org" target="_blank">
      <img src="${webpackLogo}" class="logo" alt="Webpack logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>!Hola Mundo!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
