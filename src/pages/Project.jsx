import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, ArrowSquareOutIcon, GithubLogoIcon } from '@phosphor-icons/react';
import projects, { toProjectSlug } from '../data/projects';
import Markdown from 'react-markdown';

const STACK_LABELS = {
    react: 'React',
    html: 'HTML',
    css: 'CSS',
    scss: 'SCSS',
    js: 'JavaScript',
    ts: 'TypeScript',
    java: 'Java',
};

function Project() {
    const { projectId } = useParams();
    const project = projects.find((item) => toProjectSlug(item.name) === projectId);

    if (!project) {
        return (
            <main className="project-page">
                <section>
                    <Link to="/projects" className='back-btn'>
                        <ArrowLeftIcon /> Back to projects
                    </Link>
                    <h1>Project not found</h1>
                </section>
            </main>
        );
    }

    return (
        <main className="project-page">
            <section>
                <Link to="/projects" className='back-btn'>
                    <ArrowLeftIcon /> Back to projects
                </Link>

                <img
                    className="project-detail-banner"
                    src={project.banner_url}
                    alt={`${project.name} preview`}
                />

                <div className='title-container'>
                    <img src={project.favicon_url} alt="" />
                    <div className="page-title">
                        <h1>{project.name}</h1>
                        <p className='project-dates'>{project.start_date}{project.end_date && ` - ${project.end_date}`}</p>
                    </div>
                </div>

                <p className='project-summary'>{project.summary}</p>

                <div className="stack-section">
                    {/* <h3>STACK</h3> */}
                    <div className="stack-container">
                        {project.stack.map((item) => (
                            <span key={item} className={'stack-' + item}>
                                {STACK_LABELS[item] || item}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="project-links">
                    {project.live_site_url && (
                        <a className='project-btn alt-btn' href={project.live_site_url} target="_blank" rel="noreferrer">
                            <span>
                                Live site
                            </span>
                            <ArrowSquareOutIcon weight='bold' />
                        </a>
                    )}
                    {project.github_url && (
                        <a className='project-btn' href={project.github_url} target="_blank" rel="noreferrer">
                            <span>
                                GitHub
                            </span>
                            <GithubLogoIcon weight='bold' />
                        </a>
                    )}
                </div>

                {project.article_markdown && (
                    <article className='project-article'>
                        <Markdown>{project.article_markdown}</Markdown>
                    </article>
                )}

            </section>
        </main>
    );
}

export default Project;