import React from "react";

const Square = ({ color, click }) => {
	const sqaureStyles = {
		height: "70px",
		width: "70px",
		borderRadius: "50%",
		border: "1px solid",
		backgroundColor: `${color}`,
	};
	return <div style={sqaureStyles} onClick={click}></div>;
};

export default Square;
