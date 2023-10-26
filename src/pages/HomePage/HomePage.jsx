import { TypeAnimation } from "react-type-animation";

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

const HomePage = () => {
	return (
		<main className="homepage">
         <div className="homepage-txt">
            <br></br>
            <br></br>
            <br></br>
				<h1>Hello!</h1>
				<h2>I'm Giovanna Luciano</h2>
				<TypeAnimationComponent />
				{/* <h3>Back End Developer</h3>
				<h3>React Js Developer</h3>
				<h3>MERN Developer</h3>
				<h3>Design Enthusiast</h3> */}
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
