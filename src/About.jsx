const techStack = {
  languages: ["JavaScript", "Python", "Java", "C++"],
  web: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express"],
  ai: ["TensorFlow", "PyTorch", "OpenCV", "NLP"],
  database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
}

function About() {
  return (
    <section id="about" className="section">
      <h2>About</h2>
      <p className="about-intro">
        I’m a software engineering student who loves building things on the web, 
        learning fast, and solving real problems with clean, thoughtful code.
      </p>
      <p>I have worked with various technologies and frameworks on different school/personal projects and club workshops & products.  
        Below are the notable ones. 
      </p>
      
      <div className="tech-stack">
        <div className="tech-category">
          <h3>Web Stack</h3>
          <div className="tech-tags">
            {techStack.web.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        <div className="tech-category">
          <h3>Languages</h3>
          <div className="tech-tags">
            {techStack.languages.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        <div className="tech-category">
          <h3>AI & ML</h3>
          <div className="tech-tags">
            {techStack.ai.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        <div className="tech-category">
          <h3>Database</h3>
          <div className="tech-tags">
            {techStack.database.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

