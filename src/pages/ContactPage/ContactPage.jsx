const ContactPage = () => {
	return (
		<main className="contactpage">
			<div className="contact-txt">
				<h2>Contact Me</h2>
				<ul>
					<li className="contact-spacing">
						<a href="tel:9498137689" target="_blank" className="contact-info">
							949.813.7689
						</a>
					</li>
					<li className="contact-spacing">
						<a
							href="mailto:vannaluciano@gmail.com"
							target="_blank"
							className="contact-info"
						>
							vannaluciano@gmail.com
						</a>
					</li>
					<li className="contact-spacing">
						<a
							href="https://github.com/Vannasaur"
							target="_blank"
							className="contact-info"
						>
							Github
						</a>
					</li>
					<li className="contact-spacing">
						<a
							href="https://www.instagram.com/luccii.creates/"
							target="_blank"
							className="contact-info"
						>
							Instagram
						</a>
					</li>
				</ul>
			</div>
			<div className="contact-img">
				<img
					src="../../public/images/contact.svg"
					className="work-from-home"
				></img>
			</div>
		</main>
	);
};
export default ContactPage;
