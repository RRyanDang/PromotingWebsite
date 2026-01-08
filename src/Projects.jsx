const projects = [
  {
    title: "Project 1",
    description: "Description of your project here.",
    stack: ["React", "Node.js", "CSS"],
    link: "<link_to_project>"
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

