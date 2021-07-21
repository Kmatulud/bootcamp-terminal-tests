let assert = require("assert");
let findItemsOver20 = require("../bootcamp-functions/findItemsOver20");

describe("findItemsOver20", () => {
    it("should return all the products that have a quantity higher than 20", () => {
        assert.deepStrictEqual([{name:"pears",qty:37},{name:"pears",qty:39},{name:"bananas",qty:27}], findItemsOver20([{name:"apples",qty:10},{name:"pears",qty:37},{name:"pears",qty:39},{name:"bananas",qty:27},{name:"apples",qty:3}]))
        assert.deepStrictEqual([{name:"pears",qty:37},{name:"bananas",qty:27}], findItemsOver20([{name:"apples",qty:10},{name:"pears",qty:37},{name:"bananas",qty:27},{name:"apples",qty:3}]))
        assert.deepStrictEqual([], findItemsOver20([{name:"apples",qty:10},{name:"apples",qty:3},{name:"apples",qty:18}]))
    });
});
