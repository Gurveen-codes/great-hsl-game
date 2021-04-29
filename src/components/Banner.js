import React from "react";

const Banner = ({ bgColor, answerColor }) => {
	return (
		<div
			className="banner"
			style={{ backgroundColor: `${bgColor ? bgColor : "black"}` }}
		>
			<p>The Great</p>
			<h1 className="main-title">{answerColor}</h1>
			<p>Game</p>
		</div>
	);
};

export default Banner;
