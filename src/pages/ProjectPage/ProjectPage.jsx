const ProjectPage = () => {
	return (
		<div className="projects">
			<figure className="project">
				<img
					src="/images/projects/JATE.jpeg"
					className="project-img"
				/>
				<figcaption className="textbox">
					<h3>Text Editor</h3>
					<a
						href="https://aqueous-earth-61873-b9d107970637.herokuapp.com/"
						target="_blank"
					>
						<button className="project-btn">Application</button>
					</a>
					<a href="https://github.com/Vannasaur/text-editor" target="_blank">
						<button className="project-btn">GitHub</button>
					</a>
				</figcaption>
			</figure>
			<figure className="project">
				<img
					src="/images/projects/weather-dashboard.png"
					className="project-img"
				/>
				<figcaption className="textbox">
					<h3>Weather Dashboard</h3>
					<a
						href="https://vannasaur.github.io/weather-dashboard/"
						target="_blank"
					>
						<button className="project-btn">Application</button>
					</a>
					<a
						href="https://github.com/Vannasaur/weather-dashboard"
						target="_blank"
					>
						<button className="project-btn">GitHub</button>
					</a>
				</figcaption>
			</figure>
			<figure className="project">
				<img
					src="/images/projects/blog.png"
					className="project-img"
				/>
				<figcaption className="textbox">
					<h3>Blog</h3>
					<a
						href="https://immense-caverns-15186-3cc45d438581.herokuapp.com/"
						target="_blank"
					>
						<button className="project-btn">Application</button>
					</a>
					<a href="https://github.com/Vannasaur/tech-blog" target="_blank">
						<button className="project-btn">GitHub</button>
					</a>
				</figcaption>
			</figure>
			<figure className="project">
				<img
					src="/images/projects/help-desk.jpeg"
					className="project-img"
				/>
				<figcaption className="textbox">
					<h3>Help Desk</h3>
					<a
						href="https://murmuring-chamber-70429-75790581b652.herokuapp.com/"
						target="_blank"
					>
						<button className="project-btn">Application</button>
					</a>
					<a
						href="https://github.com/Vannasaur/girls-help-desk"
						target="_blank"
					>
						<button className="project-btn">GitHub</button>
					</a>
				</figcaption>
			</figure>
			<figure className="project">
				<img
					src="/images/projects/social-network.jpeg"
					className="project-img"
				/>
				<figcaption className="textbox">
					<h3>Social Network</h3>
					<a
						href="https://drive.google.com/file/d/19QZvD4w7WFKP2ogPvWiDNoEhp8jEs2i9/view"
						target="_blank"
					>
						<button className="project-btn">Demo</button>
					</a>
					<a
						href="https://github.com/Vannasaur/social-network-api"
						target="_blank"
					>
						<button className="project-btn">GitHub</button>
					</a>
				</figcaption>
			</figure>
			<figure className="project">
				<img
					src="/public/images/projects/codequiz.png"
					className="project-img"
				/>
				<figcaption className="textbox">
					<h3>Code Quiz</h3>
					<a href="https://vannasaur.github.io/code-quiz/" target="_blank">
						<button className="project-btn">Application</button>
					</a>
					<a href="https://github.com/Vannasaur/code-quiz" target="_blank">
						<button className="project-btn">GitHub</button>
					</a>
				</figcaption>
			</figure>
		</div>
	);
};
export default ProjectPage;
