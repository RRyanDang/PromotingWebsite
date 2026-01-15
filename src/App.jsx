import { useState, useEffect } from 'react'
import Projects from './Projects'
import './App.css'
import About from './About'

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className={`app ${loaded ? 'loaded' : ''}`}>
      <nav>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-name">
          {/* <a href="#about">Ryan Dang</a> */}
          <h1 className="rainbow-text">Ryan Dang</h1>
        </div>
      </nav>

      <main>

        <About />

        <Projects />

        <section id="contact" className="section">
          <h2>Get in Touch</h2>
          <p>
            <a href="mailto:ryandang7890@gmail.com">ryandang7890@gmail.com</a>
          </p>
          <div className="social-links">
            <a href="https://github.com/RRyanDang" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/vmdang/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Ryan Dang</p>
      </footer>
    </div>
  )
}

export default App

