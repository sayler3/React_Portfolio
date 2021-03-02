import React from "react";
import Bio from "../Components/Bio";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Modal from "../Components/Modal";
import Skills from "../Components/Skills";

const Home = () => {
	return (
		<div>
			<Header />
			<Bio />
			<Carousel />
			<Skills />
			<Footer />
			<Modal />
		</div>
	);
};

export default Home;
