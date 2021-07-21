module.exports = function transportFee(shift) {
	switch (shift) {
		case "morning":
			return "R20";
			break;
		case "afternoon":
			return "R10";
			break;
		default:
			return "free";
	}
}