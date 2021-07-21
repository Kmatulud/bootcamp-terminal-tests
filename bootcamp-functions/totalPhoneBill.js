module.exports = function totalPhoneBill(callsMade) {
	var newStr = callsMade.split(", ");
	var total1 = 0;
	var total2 = 0;
	for (var i = 0; i < newStr.length; i++) {
		if (newStr[i].startsWith("c")) {
			total1 += 2.75;
		} else if (newStr[i].startsWith("s")) {
			total2 += 0.65;
		}
	}
	var result = total1 + total2;
	return "R" + result.toFixed(2);
}
