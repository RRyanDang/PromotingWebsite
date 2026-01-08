const projects = [
  {
    title: "Stocky",
    description: "A powerfull stock market analysis & predictor tool that provides real-time data visualization and predictive analytics to help investors make informed decisions.",
    stack: ["Python","React", "FastAPI", "Streamlit","SQLite","Pandas","NumPy","Scikit-learn"],
    link: "https://github.com/RRyanDang/Stocky"
  },
  {
    title: "GrowEasy",
    description: "A modern web application that makes gardening easier for everyone using AI. GrowEasy provides detailed instructions, progress tracking, and AI-powered photo analysis to help you grow healthy plants.",
    stack: ["Python","React", "Tailwind CSS", "Flask", "EfficientNet", "PyTorch", "OpenCV"],
    link: "https://github.com/RRyanDang/GrowEasy"
  },
  {
    title: "Approach to a safer Toronto",
    description: "A comprehensive data science project analyzing half a million official records of crime for patterns in Toronto to enhance public safety. Utilized data visualization, clustering algorithms, and predictive modeling to identify high-risk areas and suggest actionable preventive measures.",
    stack: ["Python", "Panda", "sklearn","Decision Trees","K-Means Clustering","Apriori Algorithm"],
    link: "https://github.com/RRyanDang/Analysis-of-Crime-Patterns-in-Toronto-A-Data-Mining-Approach-to-Public-Safety"
  },
  {
    title: "Project 2",
    description: "Description of your project here.",
    stack: ["React", "Node.js", "CSS"],
    link: "<link_to_project>"
  },
  {
    title: "Project 2",
    description: "Description of your project here.",
    stack: ["React", "Node.js", "CSS"],
    link: "<link_to_project>"
  }
]

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.stack.join(", ")}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

