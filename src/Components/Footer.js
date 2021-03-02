import React from "react";

const Footer = () => {
	return (
		<section className="sec-grey">
			<div className="heading-box">
				<h3 tabIndex="0" id="tech-header">
					GET IN TOUCH
				</h3>
			</div>
			<div className="footer-icons">
				<a className="icon2" href="https://github.com/sayler3" target="blank">
					<i className="bi bi-github"></i>
				</a>
				<a
					className="icon2"
					id="footer-space"
					href="https://www.linkedin.com/in/samuel-ayler-8321b91b4/"
					target="blank"
				>
					<i className="bi bi-linkedin"></i>
				</a>
				<a
					className="icon2"
					href="..."
					target="blank"
					data-bs-toggle="modal"
					data-bs-target="#resumeModal"
				>
					<i className="bi bi-download"></i>
				</a>
				<a className="icon2" href="mailto:s.ayler@me.com">
					<i className="bi bi-envelope-open"></i>
				</a>
			</div>
		</section>
	);
};

export default Footer;
