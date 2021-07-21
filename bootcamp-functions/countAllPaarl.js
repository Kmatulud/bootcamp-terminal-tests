module.exports = function allPaarl(str) {
	var arr = [];
	var newStr = str.split(", ");
	for (var i = 0; i < newStr.length; i++) {
		if (newStr[i].startsWith("CJ")) {
			arr.push(newStr[i]);
		}
	}
	return arr.length;
};