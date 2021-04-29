import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Square from "./components/Square";
import Banner from "./components/Banner";
import { generateRandomColor, generateRandomNumber } from "./utility/utility";

const App = () => {
	const [answerColor, setAnswerColor] = useState("");
	const [colorsArr, setColorsArr] = useState([]);
	const [win, setWin] = useState(false);
	const [optionsLength, setOptionsLength] = useState(6);

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
		setColorsArr(getColorsArray(optionsLength));
	}, [getColorsArray, optionsLength]);

	const clickHandler = (selectedColor) => {
		if (selectedColor === answerColor) {
			setWin(true);
			setColorsArr([...Array(optionsLength).fill(answerColor)]);
		}
	};

	const resetHandler = () => {
		setWin(false);
		setAnswerColor(generateRandomColor());
		setColorsArr(getColorsArray(optionsLength));
	};

	const modeHandler = (x) => {
		setOptionsLength(x);
		resetHandler();
	};

	return (
		<div className="App">
			<Banner answerColor={answerColor} bgColor={win && answerColor} />
			<div className="middle">
				<button onClick={resetHandler}>New Game</button>
				<button
					className={optionsLength === 3 && "active"}
					onClick={() => modeHandler(3)}
				>
					Easy
				</button>
				<button
					className={optionsLength === 6 && "active"}
					onClick={() => modeHandler(6)}
				>
					Medium
				</button>
				<button
					className={optionsLength === 9 && "active"}
					onClick={() => modeHandler(9)}
				>
					Hard
				</button>
			</div>

			<div className="container">
				{colorsArr.map((color, i) => (
					<Square
						key={i}
						color={color}
						answerColor={answerColor}
						click={() => clickHandler(color)}
					></Square>
				))}
			</div>
		</div>
	);
};

export default App;
