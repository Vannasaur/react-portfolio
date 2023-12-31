function Footer() {
  return (
		<footer className="footer">
			<div className="footer-links">
				<a href="https://github.com/Vannasaur" target="_blank" className="socials">
					<img src="/images/github.svg" className="github"></img>
				</a>
				<a href="https://www.linkedin.com/in/giovanna-luciano/" target="_blank" className="socials">
					<img
						src="/images/linkedin.svg"
						className="linkedin"
					></img>
				</a>
				<a href="https://www.instagram.com/luccii.creates/" target="_blank" className="socials">
					<img src="/images/ig.svg" className="instagram"></img>
				</a>
			</div>
			<div className="footer-logo">
				<img
					src="/images/LucciiDesignHotPink.svg"
					className="logo"
				></img>
			</div>
		</footer>
	);
}
export default Footer;