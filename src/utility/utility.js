const generateRandomNumber = (start, end) => {
	return Math.floor(Math.random() * (end - start + 1) + start);
};

const generateRandomColor = () => {
	const randomHue = generateRandomNumber(0, 360);
	const randomSat = generateRandomNumber(0, 100);
	const randomLight = generateRandomNumber(0, 100);

	return `hsl(${randomHue}, ${randomSat}%, ${randomLight}%)`;
};

export { generateRandomColor, generateRandomNumber };
