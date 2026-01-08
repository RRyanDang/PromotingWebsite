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
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
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
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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

