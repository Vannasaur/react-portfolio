// Bringing in the required import from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import glResume from '../../public/assets/gluciano-resume.pdf';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false)
	const [largeScreen, setLargeScreen] = useState(window.innerWidth > 1200)

	const toggleMenu = () => {
		setShowMenu(!showMenu)
	}

	useEffect(() => {
		const handleResize = () => {
			setLargeScreen(window.innerWidth > 1200)
		}

		handleResize()

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		// The nav component will render each of the Link elements in the links prop
		<nav className="flex nav">
			<div className="nav-name">Giovanna Luciano</div>
			{largeScreen && (
				<>
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
						<a href={glResume} download="Giovanna Luciano Resume">
							<button className="resume-btn navbar">Resume</button>
						</a>
					</div>
				</>
			)}
			{!largeScreen && !showMenu && (
				<>
					<div className="menuIcon" onClick={toggleMenu}>
						☰
					</div>
				</>
			)}
			{!largeScreen && showMenu && (
				<div className="navbar">
					<div className="exitMenu" onClick={toggleMenu}>
						x
					</div>
					<div>
						<Link to={"/"} onClick={() => setShowMenu(false)}>
							Home
						</Link>
					</div>
					<div>
						<Link to={"/about"} onClick={() => setShowMenu(false)}>
							About
						</Link>
					</div>
					<div>
						<Link to={"/contact"} onClick={() => setShowMenu(false)}>
							Contact
						</Link>
					</div>
					<div>
						<Link to={"/projects"} onClick={() => setShowMenu(false)}>
							Projects
						</Link>
					</div>
					<div>
						<a href={glResume} download="Giovanna Luciano Resume">
							<button className="resume-btn navbar">Resume</button>
						</a>
					</div>
				</div>
			)}
		</nav>
	);
}
export default Header;
