import React from 'react';

const Project = ({ imgSrc, title, description,appLink, githubLink }) => {
	return (
		<figure className="project">
			<img src={imgSrc} className="project-img" />
			<figcaption className="textbox">
				<h3>{title}</h3>
				<h5>{description}</h5>
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
			imgSrc: '/images/projects/will-do.png',
			title: 'Will Do: Crush Your Goals!',
			description: 'Task Manager built with React, Express, Node, and MongoDB',
			appLink: 'https://will-do-7ujl.onrender.com/',
			githubLink: 'https://github.com/kyleochata/Will-DO-Crush-your-goals',
		},
		{
			imgSrc: '/images/projects/help-desk.jpeg',
			title: 'Help Desk',
			description: 'IT Help Desk built with Handlebars, Express, Node, and MySQL',
			appLink: 'https://murmuring-chamber-70429-75790581b652.herokuapp.com/',
			githubLink: 'https://github.com/Vannasaur/girls-help-desk',
		},
		{
			imgSrc: '/images/projects/JATE.jpeg',
			title: 'Text Editor',
			description: 'Progressive Web Application built with JavaScript, Node, and Webpack',
			appLink: 'https://aqueous-earth-61873-b9d107970637.herokuapp.com/',
			githubLink: 'https://github.com/Vannasaur/text-editor',
		},
		{
			imgSrc: '/images/projects/blog.png',
			title: 'Blog',
			description: 'Blog site built with Handlebars, Express, Node, and MySQL',
			appLink: 'https://immense-caverns-15186-3cc45d438581.herokuapp.com/',
			githubLink: 'https://github.com/Vannasaur/tech-blog',
		},
		{
			imgSrc: '/images/projects/weather-dashboard.png',
			title: 'Weather Dashboard',
			description: 'Weather application built with JavaScript, HTML, CSS, and RESTful APIs',
			appLink: 'https://vannasaur.github.io/weather-dashboard/',
			githubLink: 'https://github.com/Vannasaur/weather-dashboard',
		},
		{
			imgSrc: '/images/projects/codequiz.png',
			title: 'Code Quiz',
			description: 'Quiz application built with JavaScript, HTML, and CSS',
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
					description={project.description}
					appLink={project.appLink}
					githubLink={project.githubLink}
				/>
			))}
		</div>
	);
};

export default ProjectPage;
