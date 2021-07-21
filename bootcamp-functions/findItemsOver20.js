module.exports = function findItemsOver20(item, qty) {
	var here = [];
	for (var i = 0; i < item.length; i++) {
		var items = item[i];
		var name = items[name];
		var qty = items.qty;
		if (qty > 20) {
			var ItemsOver20 = items;
			here.push(ItemsOver20);
		}
	}
	return here;
}
