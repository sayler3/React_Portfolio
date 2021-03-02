import React from "react";

const Skills = () => {
	return (
		<section className="sec-white container">
			<div className="heading-box">
				<h3 tabIndex="0" id="tech-header">
					SKILLS
				</h3>
			</div>

			<div className="skills-wrapper container">
				<div className="skills-container col s4">
					<h3 className="skills-heading" tabIndex="0">
						CODE
					</h3>
					<p className="skills-text">HTML5, CSS3</p>
					<p className="skills-text">JavaScript ES6</p>
					<p className="skills-text">React, Redux</p>
					<p className="skills-text">Command Line</p>
					<p className="skills-text">Working with API:s</p>
					<p className="skills-text">CSS Flexbox & Grid</p>
					<p className="skills-text">Java</p>
				</div>
				<div className="skills-container col s4">
					<h3 className="skills-heading" tabIndex="0">
						TOOLBOX
					</h3>
					<p className="skills-text">VS Code</p>
					<p className="skills-text">GitHub</p>
					<p className="skills-text">MongoDB</p>
					<p className="skills-text">MySQL</p>
					<p className="skills-text">Postman</p>
					<p className="skills-text">jQuery</p>
					<p className="skills-text">BootStrap</p>
				</div>
				<div className="skills-container col s4">
					<h3 className="skills-heading" tabIndex="0">
						MORE
					</h3>
					<p className="skills-text">Communication</p>
					<p className="skills-text">Web editing</p>
					<p className="skills-text">Content creation</p>
					<p className="skills-text">Team leadership</p>
					<p className="skills-text">Resource management</p>
					<p className="skills-text">Project management</p>
					<p className="skills-text">Team work</p>
				</div>
			</div>
		</section>
	);
};

export default Skills;
