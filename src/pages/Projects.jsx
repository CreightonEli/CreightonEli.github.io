// project page. Allows users to view all of my projects and click on them to view more information about them.
import { useState } from "react"
import ProjectCard from "../components/ProjectCard"

function Projects() {
  const [filter, setFilter] = useState(0)

  return (
    <main className="projects-page">
      <section>
        <div className="page-title">
          <h1>Projects</h1>
          <p>This is the projects page.</p>
        </div>
        <div className="project-filters" role="group" aria-label="Filter projects">
          <button
            className={filter === 0 ? 'active' : ''}
            aria-pressed={filter === 0}
            onClick={() => setFilter(0)}
          >
            All
          </button>
          <button
            className={filter === 1 ? 'active' : ''}
            aria-pressed={filter === 1}
            onClick={() => setFilter(1)}
          >
            Web Apps
          </button>
          <button
            className={filter === 2 ? 'active' : ''}
            aria-pressed={filter === 2}
            onClick={() => setFilter(2)}
          >
            UI & Components
          </button>
          <button
            className={filter === 3 ? 'active' : ''}
            aria-pressed={filter === 3}
            onClick={() => setFilter(3)}
          >
            Games
          </button>
          <button
            className={filter === 4 ? 'active' : ''}
            aria-pressed={filter === 4}
            onClick={() => setFilter(4)}
          >
            Tools
          </button>
        </div>
        <div className="project-list">
          <ProjectCard num={filter}/>
        </div>
      </section>
    </main>
  )
}

export default Projects