import React from "react";

const Bio = () => {
	return (
		<>
			<section className="sec-grey">
				<div className="heading-box" id="bio">
					<h3 tabIndex="0" id="tech-header">
						I AM SAM
					</h3>
				</div>
				<p className="container" tabIndex="0" id="tech">
					I am leveraging an aviation background to build a more intuitive user
					experience on all platforms. Recently, I earned a certificate in
					full-stack development from the University of Berkeley, with newly
					developed skills in JavaScript, React.js, Node.js, MongoDB, MySQL,
					responsive web, and app design. Among my teammates, I am an innovative
					problem solver passionate about developing apps, focusing on
					mobile-first design and development building solutions rooted in
					engaging each audience for an impactful user experience unique to
					every project. Including applying all aspects of the UX design process
					and agile development.
				</p>
			</section>
			<section className="sec-white container">
				<div className="heading-box">
					<h3 tabIndex="0" id="tech-header">
						TECH
					</h3>
				</div>
				<p className="tech-text container" tabIndex="0" id="tech">
					HTML5, CSS3, Flexbox, JavaScript ES6, React, React Native, Node.js,
					API:s, MongoDB, MySQL, Bootstrap, jQuery, express, express-handlebars,
					Sequelized, Web Accessibility, Responsive design, Mob-programming,
					Pair-programming, GitHub.
				</p>
			</section>
		</>
	);
};

export default Bio;
