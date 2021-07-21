module.exports = function allFromTown(arr, regNum) {
	console.log(arr);
	var newArr = arr.split(",");
	var emptyArr = [];
	for (var i = 0; i < newArr.length; i++) {
		var trimArr = newArr[i].trim();
		if (trimArr.startsWith(regNum)) {
			emptyArr.push(trimArr);
		}
	}
	return emptyArr.length;
};