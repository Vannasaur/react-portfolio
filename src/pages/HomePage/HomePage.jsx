import { TypeAnimation } from "react-type-animation";
import Marquee from "react-fast-marquee";

// marquee images
import adobeillustrator from "../../../public/images/marquee/adobeillustrator.svg";
import bootstrap from "../../../public/images/marquee/bootstrap.svg";
import css from "../../../public/images/marquee/css3.svg";
import expressjs from "../../../public/images/marquee/expressjs.svg";
import git from "../../../public/images/marquee/git.svg";
import graphql from "../../../public/images/marquee/graphql.svg";
import handlebars from "../../../public/images/marquee/handlebars.svg";
import heroku from "../../../public/images/marquee/heroku.svg";
import html from "../../../public/images/marquee/html5.svg";
import javascript from "../../../public/images/marquee/javascript.svg";
import jquery from "../../../public/images/marquee/jquery.svg";
import mongodb from "../../../public/images/marquee/mongodb.svg";
import mysql from "../../../public/images/marquee/mysql.svg";
import nodejs from "../../../public/images/marquee/nodejs.svg";
import reactjs from "../../../public/images/marquee/reactjs.svg";
import sequelize from "../../../public/images/marquee/sequelize.svg";
import vitejs from "../../../public/images/marquee/vitejs.svg";


const TypeAnimationComponent = () => {
	return (
		<TypeAnimation
			sequence={[
				"Front End Developer", // Types
				2000, // Waits 1s
				"Back End Developer", // Deletes first text and types second text
				2000, // Waits 2s
				"React Js Developer",
				2000,
				"MERN Developer",
				2000,
				"Design Enthusiast",
				2000,

				() => {
					console.log("Sequence completed");
				},
			]}
			wrapper="span"
			cursor={true}
			repeat={Infinity}
			style={{ fontSize: "2em", display: "inline-block" }}
		/>
	);
};

const MarqueeComponent = () => {
	return (
		<Marquee
			gradient={true}
			speed={100}
			pauseOnHover={true}
			direction="right"
			gradientColor="black"
		>
			<div>
				<img src={adobeillustrator} className="marquee-img"></img>
				<p className="marquee-txt">Illustrator</p>
			</div>
			<div>
				<img src={bootstrap} className="marquee-img"></img>
				<p className="marquee-txt">Bootstrap</p>
			</div>
			<div>
				<img src={css} className="marquee-img"></img>
				<p className="marquee-txt">CSS3</p>
			</div>
			<div>
				<img src={expressjs} className="marquee-img"></img>
				<p className="marquee-txt">Express.js</p>
			</div>
			<div>
				<img src={git} className="marquee-img"></img>
				<p className="marquee-txt">Git</p>
			</div>
			<div>
				<img src={graphql} className="marquee-img"></img>
				<p className="marquee-txt">GraphQL</p>
			</div>
			<div>
				<img src={handlebars} className="marquee-img"></img>
				<p className="marquee-txt">Handlebars</p>
			</div>
			<div>
				<img src={heroku} className="marquee-img"></img>
				<p className="marquee-txt">Heroku</p>
			</div>
			<div>
				<img src={html} className="marquee-img"></img>
				<p className="marquee-txt">HTML5</p>
			</div>
			<div>
				<img src={javascript} className="marquee-img"></img>
				<p className="marquee-txt">JavaScript</p>
			</div>
			<div>
				<img src={jquery} className="marquee-img"></img>
				<p className="marquee-txt">jQuery</p>
			</div>
			<div>
				<img src={mongodb} className="marquee-img"></img>
				<p className="marquee-txt">MongoDB</p>
			</div>
			<div>
				<img src={mysql} className="marquee-img"></img>
				<p className="marquee-txt">MySQL</p>
			</div>
			<div>
				<img src={nodejs} className="marquee-img"></img>
				<p className="marquee-txt">Node.js</p>
			</div>
			<div>
				<img src={reactjs} className="marquee-img"></img>
				<p className="marquee-txt">React.js</p>
			</div>
			<div>
				<img src={sequelize} className="marquee-img"></img>
				<p className="marquee-txt">Sequelize</p>
			</div>
			<div>
				<img src={vitejs} className="marquee-img"></img>
				<p className="marquee-txt">Vite.js</p>
			</div>
		</Marquee>
	);
};

const HomePage = () => {
	return (
		<main className="homepage">
			<div className="homepage-txt">
				<br></br>
				<br></br>
				<br></br>
				<h1>Hello!</h1>
				<h2>
					I'm <span className="my-name">Giovanna Luciano</span>
				</h2>
				<TypeAnimationComponent />
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<MarqueeComponent />
			</div>
			<div className="homepage-img">
				<img
					src="../../public/images/girlCoding.svg"
					className="girl-coding"
				></img>
			</div>
		</main>
	);
};
export default HomePage;
