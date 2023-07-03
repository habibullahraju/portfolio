
import './App.css'
import About from './components/About/About'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Home from './page/Home/Home'

function App() {
  return (
    <div>
      <div className='px-4 md:px-20'>
          <Home></Home>
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
          <ContactMe></ContactMe>
      </div>
          <Footer></Footer>
    </div>
  )
}

export default App
