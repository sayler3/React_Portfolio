import React from "react";
import { useState } from "react";
import logo from "../Utils/galaxy_login.png";

const Carousel = () => {
	// intial state of information
	const [project, setproject] = useState([
		{
			title: "Galaxy",
			img: logo,
			id: 1,
			description:
				"Galaxy Planner is a full-stack application designed to make household\
			planning easier. A user or users can keep track of what chores each\
			person is responsible for. Themed around superheros, the app creators\
			hope that this increases interactivity and engagement for younger\
			members of each household. All credentials are protected with\
			encryption. A Sequelize ORM coupled with GET and POST enables\
			server-side CRUD functionality.",
			deployed: "",
			repo: "",
		},
		{
			title: "Burger",
			img:
				"https://images.unsplash.com/photo-1613230485062-bd14a89bb3c8?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
			id: 2,
			description: "Some text goes here...",
			deployed: "",
			repo: "",
		},
		{
			title: "Recipe Pal",
			id: 3,
			description: "Some text goes here...",
			deployed: "",
			repo: "",
		},
		{
			title: "Test",
			id: 4,
			description: "Some text goes here...",
			deployed: "",
			repo: "",
		},
	]);

	// state for current view
	const [current, setcurrent] = useState(project[0]);

	return (
		<section className="projects sec-grey">
			<div className="container">
				<div className="row d-flex justify-content-center">
					<div className="col-12 col-lg-11">
						<div className="heading-box" id="heading-project-box">
							<h3 tabIndex="0" id="tech-header">
								FEATURED PROJECTS
							</h3>
						</div>
						<div
							id="Indicators"
							className="carousel carousel-dark slide carousel-fade"
							data-bs-ride={false}
						>
							<div className="carousel-indicators">
								<button
									type="button"
									data-bs-target="#Indicators"
									data-bs-slide-to="0"
									className="active"
									aria-current="true"
									aria-label="Slide 1"
								></button>
								<button
									type="button"
									data-bs-target="#Indicators"
									data-bs-slide-to="1"
									aria-label="Slide 2"
								></button>
								<button
									type="button"
									data-bs-target="#Indicators"
									data-bs-slide-to="2"
									aria-label="Slide 3"
								></button>
								<button
									type="button"
									data-bs-target="#Indicators"
									data-bs-slide-to="3"
									aria-label="Slide 4"
								></button>
							</div>
							<div
								className="carousel-inner container"
								style={{ overflow: "inherit" }}
							>
								<div className="carousel-item active" target="1">
									<img src={current.img} className="d-block w-100" alt="..." />
									<p></p>
									<div className="description" id="tech">
										<h4 tabIndex="0">{current.title}</h4>
										<p className="descriptionText media-caption" tabIndex="0">
											{current.description}
										</p>
										<div className="links" tabIndex="0">
											<a
												className="bi bi-link-45deg link"
												href="https://sayler3.github.io/Food_Application/"
											>
												Deployed
											</a>
											<a
												className="bi bi-github link"
												href="https://github.com/sayler3/Food_Application/tree/main/Assets/images"
											>
												Repo
											</a>
										</div>
									</div>
								</div>
								<div className="carousel-item" target="2">
									<img src={current.img} className="d-block w-100" alt="..." />
									<p></p>
									<div className="description" id="tech">
										<h4 tabIndex="0">{current.title}</h4>
										<p className="descriptionText media-caption" tabIndex="0">
											{current.description}
										</p>
										<div className="links" tabIndex="0">
											<a
												className="bi bi-link-45deg link"
												href="https://sayler3.github.io/Food_Application/"
											>
												Deployed
											</a>
											<a
												className="bi bi-github link"
												href="https://github.com/sayler3/Food_Application/tree/main/Assets/images"
											>
												Repo
											</a>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<img
										src="https://images.unsplash.com/photo-1613230485062-bd14a89bb3c8?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
										className="d-block w-100"
										alt="..."
									/>
									<p></p>
									<div className="description" id="tech">
										<h4 tabIndex="0">{current.title}</h4>
										<p className="descriptionText media-caption" tabIndex="0">
											{current.description}
										</p>
										<div className="links" tabIndex="0">
											<a
												className="bi bi-link-45deg link"
												href="https://sayler3.github.io/Food_Application/"
											>
												Deployed
											</a>
											<a
												className="bi bi-github link"
												href="https://github.com/sayler3/Food_Application/tree/main/Assets/images"
											>
												Repo
											</a>
										</div>
									</div>
								</div>
								<div className="carousel-item" target="3">
									<img
										src="https://images.unsplash.com/photo-1613230485062-bd14a89bb3c8?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
										className="d-block w-100"
										alt="..."
									/>
									<p></p>
									<div className="description" id="tech">
										<h4 tabIndex="0">{current.title}</h4>
										<p className="descriptionText media-caption" tabIndex="0">
											{current.description}
										</p>
										<div className="links" tabIndex="0">
											<a
												className="bi bi-link-45deg link"
												href="https://sayler3.github.io/Food_Application/"
											>
												Deployed
											</a>
											<a
												className="bi bi-github link"
												href="https://github.com/sayler3/Food_Application/tree/main/Assets/images"
											>
												Repo
											</a>
										</div>
									</div>
								</div>
							</div>
							<button
								className="carousel-control-prev"
								type="button"
								data-bs-target="#Indicators"
								data-bs-slide="prev"
								id="carouselBtn"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
									id="carouselBtn"
								></span>
								<span className="visually-hidden">Previous</span>
							</button>
							<button
								className="carousel-control-next"
								type="button"
								data-bs-target="#Indicators"
								data-bs-slide="next"
								id="carouselBtn"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
									id="carouselBtn"
								></span>
								<span className="visually-hidden">Next</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Carousel;
