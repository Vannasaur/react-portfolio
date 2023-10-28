// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';

function Header() {
  return (
		// The nav component will render each of the Link elements in the links prop
		<nav className="flex nav">
			<div>
				<Link key={1} className="navbar" to="/">
					Home
				</Link>
			</div>
			<div>
				<Link key={2} className="navbar" to="/about">
					About
				</Link>
			</div>
			<div>
				<Link key={3} className="navbar" to="/projects">
					Projects
				</Link>
			</div>
			<div>
				<Link key={5} className="navbar" to="/contact">
					Contact
				</Link>
			</div>
			<div>
					<Link key={4} className="" to="/resume">
				<button className="resume-btn navbar">
						Resume
				</button>
					</Link>
			</div>
		</nav>
	);
}
export default Header
