module.exports = function yearsAgo(yearEntered) {
	var date = new Date();
	var current = date.getFullYear();
	return current - yearEntered;
};