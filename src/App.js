import logo from './assets/logo-1.svg';
import './App.css';
import Portfolio from './components/Portfolio.js';
import Header from './components/Header.js';
import Certifications from './components/Certifications.js';
import Footer from './components/Footer.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faLocationDot, faImage, faCloudArrowDown, faBars, faXmark, faDatabase, faWandMagicSparkles, faAlignLeft, faAward } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faFacebook, faLinkedin, faGithub, faJs, faWordpress, faHtml5, faCss3Alt, faPhp, faBootstrap, faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons'
library.add(faTwitterSquare, faFacebook, faLinkedin, faGithub, faJs, faWordpress, faHtml5, faCss3Alt, faLocationDot, faPhp, faImage, faCloudArrowDown, faBars, faXmark, faDatabase, faBootstrap, faWandMagicSparkles, faAlignLeft, faGoogle, faMicrosoft, faAward)

const TITLE = 'My Page Title'

export default function App() {
  return (
    <div id="page--container">
      <title>{ TITLE }</title>
      <Header />
      <Portfolio />
      <Certifications />
      <Footer />
    </div>
  )
}