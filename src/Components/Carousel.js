import React from "react";
import { useState } from "react";
import galxay_img from "../Utils/galaxy_img.png";
import directory_img from "../Utils/directory_img.png";
import pal_img from "../Utils/pal_img.png";
import workout_img from "../Utils/workout_img.png";

const Carousel = () => {
	const list = [
		{
			title: "Galaxy",
			img: galxay_img,

			description:
				"Galaxy Planner is a full-stack application designed to make household\
		planning easier. A user or users can keep track of what chores each\
		person is responsible for. Themed around superheros, the app creators\
		hope that this increases interactivity and engagement for younger\
		members of each household. All credentials are protected with\
		encryption. A Sequelize ORM coupled with GET and POST enables\
		server-side CRUD functionality.",
			deployed: "https://galaxy-planning.herokuapp.com/",
			repo: "https://github.com/sayler3/Galaxy",
		},
		{
			title: "Recipe Pal",
			img: pal_img,

			description:
				"Recipe Pal is a place where you can search for recipes, filter by preference, easily view ingredients required and add to your own customized grocery list. Our website makes it easy to locate open grocery stores and supermarkets nearby. So you can plan your perfect night cooking at home for family and friends, or for oneself, within a few clicks!",
			deployed: "https://sayler3.github.io/Food_Application/",
			repo: "https://github.com/sayler3/Food_Application",
		},
		{
			title: "Employee Directory",
			img: directory_img,
			description:
				"This is a full-stack application that gives a company or business the ability to access non-sensitive data about their employees, and easily search, filter, sort, add, and update information through their entire directory.",
			deployed: "https://employee-directory-s.herokuapp.com/",
			repo: "https://github.com/sayler3/Employee_Directory",
		},
		{
			title: "Workout Tracker",
			img: workout_img,
			description:
				"A user is able to view create and track daily workouts. Multiple exercises can be logged in a workout on any given day. The user is also able to track the name, type, weight, sets, reps, and duration of an exercise.",
			deployed: "https://workout-tracker-sa.herokuapp.com/",
			repo: "https://github.com/sayler3/Workout_Tracker",
		},
	];
	// intial state of information
	const [project, setproject] = useState(list);

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
									<img
										src={project[0].img}
										className="d-block w-100"
										alt="..."
									/>
									<p></p>
									<div className="description" id="tech">
										<h4 tabIndex="0">{project[0].title}</h4>
										<p className="descriptionText media-caption" tabIndex="0">
											{project[0].description}
										</p>
										<div className="links" tabIndex="0">
											<a
												className="bi bi-link-45deg link"
												href={project[0].deployed}
											>
												Deployed
											</a>
											<a className="bi bi-github link" href={project[0].repo}>
												Repo
											</a>
										</div>
									</div>
								</div>
								<div className="carousel-item" target="2">
									<img
										src={project[1].img}
										className="d-block w-100"
										alt="..."
									/>
									<p></p>
									<div className="description" id="tech">
										<h4 tabIndex="0">{project[1].title}</h4>
										<p className="descriptionText media-caption" tabIndex="0">
											{project[1].description}
										</p>
										<div className="links" tabIndex="0">
											<a
												className="bi bi-link-45deg link"
												href={project[1].deployed}
											>
												Deployed
											</a>
											<a className="bi bi-github link" href={project[1].repo}>
												Repo
											</a>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<img
										src={project[2].img}
										className="d-block w-100"
										alt="..."
									/>
									<p></p>
									<div className="description" id="tech">
										<h4 tabIndex="0">{project[2].title}</h4>
										<p className="descriptionText media-caption" tabIndex="0">
											{project[2].description}
										</p>
										<div className="links" tabIndex="0">
											<a
												className="bi bi-link-45deg link"
												href={project[2].deployed}
											>
												Deployed
											</a>
											<a className="bi bi-github link" href={project[2].repo}>
												Repo
											</a>
										</div>
									</div>
								</div>
								<div className="carousel-item" target="3">
									<img
										src={project[3].img}
										className="d-block w-100"
										alt="..."
									/>
									<p></p>
									<div className="description" id="tech">
										<h4 tabIndex="0">{project[3].title}</h4>
										<p className="descriptionText media-caption" tabIndex="0">
											{project[3].description}
										</p>
										<div className="links" tabIndex="0">
											<a
												className="bi bi-link-45deg link"
												href={project[3].deployed}
											>
												Deployed
											</a>
											<a className="bi bi-github link" href={project[3].repo}>
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
