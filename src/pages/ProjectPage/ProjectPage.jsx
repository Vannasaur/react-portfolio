const ProjectPage = () => {
	return (
		<div>
			<ul className="projects">
				<li className="project">
					<a
						href="https://vannasaur.github.io/horiseon-refactor/"
						target="_blank"
					>
						<img src="./assets/images/Horiseon.jpg" />
					</a>
					<figcaption class="textbox">
						<h3>Horiseon Code Refactor</h3>
						<p>HTML, CSS</p>
					</figcaption>
				</li>
				<li className="project">
					<a
						href="https://marcos-wang.github.io/Project-1-JVM/"
						target="_blank"
					>
						<img src="./assets/images/Surf-Planner.jpg" />
					</a>
					<figcaption class="textbox">
						<h3>Surf Planner</h3>
						<p>HTML, CSS, JavaScript</p>
					</figcaption>
				</li>
				<li className="project">
					<a href="https://immense-caverns-15186-3cc45d438581.herokuapp.com/">
						<img src="./assets/images/Blog.jpeg" />
					</a>
					<figcaption class="textbox">
						<h3>Blog</h3>
						<p>
							Node.js, Express.js, Handlebars.js,
							<br />
							MySQL, Sequelize, Heroku
						</p>
					</figcaption>
				</li>
				<li className="project">
					<a href="https://murmuring-chamber-70429-75790581b652.herokuapp.com/">
						<img src="./assets/images/Help-Desk.jpeg" />
					</a>
					<figcaption class="textbox">
						<h3>Help Desk</h3>
						<p>
							Node.js, Express.js, Handlebars.js,
							<br />
							MySQL, Sequelize, Heroku
						</p>
					</figcaption>
				</li>
				<li className="project">
					<a href="#">
						<img src="./assets/images/Placeholder-3.jpg" />
					</a>
					<figcaption class="textbox">
						<h3>Upcoming Project</h3>
						<p>Technologies Used</p>
					</figcaption>
				</li>
				<li className="project">
					<a href="#">
						<img src="./assets/images/Placeholder-3.jpg" />
					</a>
					<figcaption class="textbox">
						<h3>Upcoming Project</h3>
						<p>Technologies Used</p>
					</figcaption>
				</li>
			</ul>
		</div>
	);
};
export default ProjectPage;
