import React, { useState, useEffect } from "react";

const Square = ({ color, click, answerColor }) => {
	const [visibility, setVisibility] = useState(true);

	useEffect(() => {
		setVisibility(true);
	}, [color, answerColor]);

	const sqaureStyles = {
		backgroundColor: `${color}`,
		opacity: !visibility && 0,
	};
	return (
		<div
			className="square"
			style={sqaureStyles}
			onClick={() => {
				click();
				if (answerColor !== color) {
					setVisibility(false);
				}
			}}
		></div>
	);
};

export default Square;
