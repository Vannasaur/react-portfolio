import React from 'react';

const Project = ({ imgSrc, title, appLink, githubLink }) => {
	return (
		<figure className="project">
			<img src={imgSrc} className="project-img" />
			<figcaption className="textbox">
				<h3>{title}</h3>
				<a href={appLink} target="_blank">
					<button className="project-btn">Application</button>
				</a>
				<a href={githubLink} target="_blank">
					<button className="project-btn">GitHub</button>
				</a>
			</figcaption>
		</figure>
	);
};

const ProjectPage = () => {
	const projects = [
		{
			imgSrc: '/images/projects/JATE.jpeg',
			title: 'Text Editor',
			appLink: 'https://aqueous-earth-61873-b9d107970637.herokuapp.com/',
			githubLink: 'https://github.com/Vannasaur/text-editor',
		},
		{
			imgSrc: '/images/projects/weather-dashboard.png',
			title: 'Weather Dashboard',
			appLink: 'https://vannasaur.github.io/weather-dashboard/',
			githubLink: 'https://github.com/Vannasaur/weather-dashboard',
		},
		{
			imgSrc: '/images/projects/blog.png',
			title: 'Blog',
			appLink: 'https://immense-caverns-15186-3cc45d438581.herokuapp.com/',
			githubLink: 'https://github.com/Vannasaur/tech-blog',
		},
		{
			imgSrc: '/images/projects/help-desk.jpeg',
			title: 'Help Desk',
			appLink: 'https://murmuring-chamber-70429-75790581b652.herokuapp.com/',
			githubLink: 'https://github.com/Vannasaur/girls-help-desk',
		},
		{
			imgSrc: '/images/projects/will-do.png',
			title: 'Will Do: Crush Your Goals!',
			appLink: 'https://will-do-7ujl.onrender.com/',
			githubLink: 'https://github.com/kyleochata/Will-DO-Crush-your-goals',
		},
		{
			imgSrc: '/images/projects/codequiz.png',
			title: 'Code Quiz',
			appLink: 'https://vannasaur.github.io/code-quiz/',
			githubLink: 'https://github.com/Vannasaur/code-quiz',
		},
	];

	return (
		<div className="projects">
			{projects.map((project, index) => (
				<Project
					key={index}
					imgSrc={project.imgSrc}
					title={project.title}
					appLink={project.appLink}
					githubLink={project.githubLink}
				/>
			))}
		</div>
	);
};

export default ProjectPage;
