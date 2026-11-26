import { Link } from 'react-router-dom';
import projects, { toProjectSlug } from '../data/projects';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import fallbackThumbnail from '../assets/branding/BGProjectThumbnail.png'

const FILTERS = {
    0: null,
    1: 'web app',
    2: 'ui & components',
    3: 'game',
    4: 'tools',
};

const STACK_LABELS = {
    react: 'React',
    html: 'HTML',
    css: 'CSS',
    scss: 'SCSS',
    js: 'JavaScript',
    ts: 'TypeScript',
    java: 'Java',
};

function ProjectCard({ num = 0, sortOrder = "most-recent" }) {
    const filter = Object.prototype.hasOwnProperty.call(FILTERS, num)
        ? FILTERS[num]
        : null;
    const sortedProjects = [...projects].sort((a, b) => {
        const idDifference = Number(a.project_id) - Number(b.project_id);
        return sortOrder === "most-recent" ? -idDifference : idDifference;
    });

    return (
        <>
            {sortedProjects.map((project) => (
                (!filter || project.category.toLowerCase() === filter) && (
                    <article className="project-card" key={project.project_id}>
                        <Link to={`/projects/${toProjectSlug(project.name)}`}>
                            <div className="banner-container">
                                <span className={'project-category ' + project.category.trim().split(/\s+/)[0].toLowerCase()}>{project.category}</span>
                                <div className='project-page-btn'>
                                    <ArrowUpRightIcon />
                                </div>
                                <img
                                    className="banner-img"
                                    src={project.banner_url || fallbackThumbnail}
                                    alt=""
                                    data-fallback-applied={project.banner_url ? undefined : 'true'}
                                    onError={(event) => {
                                        if (event.currentTarget.dataset.fallbackApplied !== 'true') {
                                            event.currentTarget.dataset.fallbackApplied = 'true';
                                            event.currentTarget.src = fallbackThumbnail;
                                        }
                                    }}
                                />
                            </div>
                            <div className="project-bottom">
                                <div className="project-head">
                                    <span className="project-num">{project.project_id}</span>
                                    <h2 className="project-name">{project.name}</h2>
                                    <span className="project-dates">{project.start_date}{project.end_date && ' - ' + project.end_date}</span>
                                </div>
                                <p className="project-summary">{project.summary}</p>
                                <div className='stack-container'>
                                    {/* {console.log(project)} */}
                                    {project.stack.map((item) => 
                                        <span key={project.project_id + item} className={'stack-' + item}>
                                            {STACK_LABELS[item] || item}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Link>
                    </article>
                )
            ))}
        </>
    )

}

export default ProjectCard