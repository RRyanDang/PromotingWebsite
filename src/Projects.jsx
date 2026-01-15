import { useEffect, useRef, useState } from 'react'

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
    title: "Autonomous Car for NEM 2025",
    description: "An autonomous car that sees, thinks, and acts in real time. By training a custom YOLOv8 object detection model and integrating it with Raspberry Pi vision processing and microcontroller-based motor control, this project turns raw camera data into intelligent autonomous movement—demonstrating how AI and embedded systems come together to solve real-world problems.",
    stack: ["OpenCV", "YOLOv8", "Raspberry Pi", "C++", "VEX Microcontroller"],
    link: "https://github.com/RRyanDang/Mushroom-Following-Bot"
  },
  {
    title: "Auto Mood Music Player",
    description: "A smart music player that automatically adjusts the playlist based on your current mood, using AI to analyze your behavior and preferences.",
    stack: ["TensorFlow / Keras", "OpenCV", "Gemini API","Youtube Data API"],
    link: "https://github.com/RRyanDang/Emotion-Auto-Music"
  },
  {
    title: "Uber Clone",
    description: "A recreation of the Uber app",
    stack: ["React", "Next.js", "TypeScript","Tailwind CSS","Firebase","Mapbox"],
    link: "https://github.com/RRyanDang/Uber-Clone"
  }
]

function Projects() {
  const [visibleCards, setVisibleCards] = useState(new Set())
  const cardRefs = useRef([])

  useEffect(() => {
    const observers = []

    cardRefs.current.forEach((card, index) => {
      if (!card) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => {
                const newSet = new Set(prev)
                newSet.add(index)
                return newSet
              })
              // Stop observing once it's been seen
              observer.unobserve(card)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      )

      observer.observe(card)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`project-card ${visibleCards.has(index) ? 'visible' : ''}`}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.stack.join(", ")}</p>
            <div className='link_box'>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

