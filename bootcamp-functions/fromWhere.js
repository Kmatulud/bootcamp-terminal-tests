module.exports = function fromWhere(carReg) {
	switch (carReg) {
		case "CY":
			return "Bellville";
			break;
		case "CJ":
			return "Paarl";
			break;
		case "CA":
			return "Cape Town";
			break;
		default:
			return "Some other place!";
	}
};
