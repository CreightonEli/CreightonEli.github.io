import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, ArrowSquareOutIcon, ArrowUpIcon, GithubLogoIcon } from '@phosphor-icons/react';
import projects, { toProjectSlug } from '../data/projects';
import Markdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import bannerFallback from '../assets/BGProjectBanner.png'
import faviconFallback from '../assets/BGProjectLogo.png'

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
    const [headings, setHeadings] = useState([]);
    const articleRef = useRef(null);

    useEffect(() => {
        const article = articleRef.current;

        if (!article) {
            setHeadings([]);
            return;
        }

        setHeadings(
            Array.from(article.querySelectorAll('h2[id], h3[id]')).map((heading) => ({
                id: heading.id,
                text: heading.textContent ?? '',
                level: Number(heading.tagName.slice(1)),
            }))
        );
    }, [projectId, project?.article_markdown]);

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

                <div className='banner-container'>
                {project.banner_url ? (
                    <img
                        className="project-detail-banner"
                        src={project.banner_url}
                        alt={`${project.name} preview`}
                    />
                ) :
                    <img
                        className="project-detail-banner"
                        src={bannerFallback}
                        alt={`${project.name} preview`}
                    />
                }
                </div>

                <div className='content-container'>
                    <div className='content'>

                        <div className='title-container'>
                            {project.favicon_url ? (
                                <img src={project.favicon_url} alt="" />
                            ):
                                <img src={faviconFallback} alt='' />
                            }
                            <div className="page-title">
                                <h1>{project.name}</h1>
                                <p className='project-dates'>{project.start_date}{project.end_date && ` - ${project.end_date}`}</p>
                            </div>
                        </div>

                        <div className="stack-section">
                            <h3>STACK</h3>
                            <div className="stack-container">
                                {project.stack.map((item) => (
                                    <span key={item} className={'stack-' + item}>
                                        {STACK_LABELS[item] || item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className='project-summary'>{project.summary}</p>

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
                            <article className='project-article' ref={articleRef}>
                                <Markdown rehypePlugins={[rehypeSlug]}>{project.article_markdown}</Markdown>
                            </article>
                        )}
                    </div>
                    {project.article_markdown && (
                        <nav className='project-toc'>
                            <ol>
                                <span className='toc-heading'>TABLE OF CONTENTS</span>
                                {headings.map((h) => (
                                    <li key={h.id} className={`level-${h.level}`}>
                                    <a href={`#${h.id}`}>{h.text}</a>
                                    </li>
                                ))}
                            </ol>
                            <a href="#top" className='top-btn'>Back to top <ArrowUpIcon /></a>
                        </nav>
                    )}
                </div>

            </section>
        </main>
    );
}

export default Project;