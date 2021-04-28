import React from "react";

const Banner = ({ bgColor, answerColor }) => {
	return (
		<div
			className="banner"
			style={{ backgroundColor: `${bgColor ? bgColor : "lightgreen"}` }}
		>
			<h1>{answerColor}</h1>
		</div>
	);
};

export default Banner;
