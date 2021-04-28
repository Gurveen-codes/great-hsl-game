import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Square from "./components/Square";
import Banner from "./components/Banner";
import { generateRandomColor, generateRandomNumber } from "./utility/utility";

const App = () => {
	const [answerColor, setAnswerColor] = useState("");
	const [colorsArr, setColorsArr] = useState([]);
	const [win, setWin] = useState(false);

	const getColorsArray = useCallback(
		(length) => {
			let newArr = [...Array(length)].map((x) => generateRandomColor());
			let randomIndex = generateRandomNumber(0, length - 1);
			newArr[randomIndex] = answerColor;
			return newArr;
		},
		[answerColor]
	);

	useEffect(() => {
		setAnswerColor(generateRandomColor());
	}, []);

	useEffect(() => {
		setColorsArr(getColorsArray(6));
	}, [getColorsArray]);

	const clickHandler = (selectedColor) => {
		if (selectedColor === answerColor) {
			setWin(true);
		}
	};

	const resetHandler = () => {
		setWin(false);
		setAnswerColor(generateRandomColor());
		setColorsArr(getColorsArray(6));
	};

	return (
		<div className="App">
			<Banner answerColor={answerColor} bgColor={win && answerColor} />
			<button onClick={resetHandler}>New Game</button>
			<div className="container">
				{colorsArr.map((color, i) => (
					<Square
						key={i}
						color={color}
						className="square"
						click={() => clickHandler(color)}
					></Square>
				))}
			</div>
			{win && <h1>You Win</h1>}
		</div>
	);
};

export default App;
