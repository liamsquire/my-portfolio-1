import logo from './assets/logo-1.svg';
import './App.css';
import Portfolio from './components/Portfolio.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faLocationDot, faImage, faCloudArrowDown, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faFacebook, faLinkedin, faGithub, faJs, faWordpress, faHtml5, faCss3Alt, faPhp } from '@fortawesome/free-brands-svg-icons'
library.add(faTwitterSquare, faFacebook, faLinkedin, faGithub, faJs, faWordpress, faHtml5, faCss3Alt, faLocationDot, faPhp, faImage, faCloudArrowDown, faBars, faXmark)

export default function App() {
  return (
    <div id="page--container">
      <Header />
      <Portfolio />
      <Footer />
    </div>
  )
}