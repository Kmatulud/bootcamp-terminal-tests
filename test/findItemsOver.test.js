let assert = require("assert");
let findItemsOver = require("../bootcamp-functions/findItemsOver");

describe("findItemsOver", () => {
    it("should return products that have quantity higher than the threshold.", () => {
        assert.deepStrictEqual([{name : "pears", qty : 37}, {name:"apples", qty:40},{name : "pears", qty : 28},{name:"pears", qty:26}], findItemsOver([{name : "pears", qty : 37}, {name:"apples",qty:40}, {name: "bananas",qty: 17},{name:"pears", qty:28}, {name:"pears", qty:26}],25))
    
        assert.deepStrictEqual([], findItemsOver([{name:"apples",qty:10},{name:"pears",qty:37},{name:"pears",qty:39},{name:"bananas",qty:27},{name:"apples",qty:3}],50))

        assert.deepStrictEqual([{name:"apples",qty:10},{name:"pears",qty:37},{name:"pears",qty:39},{name:"bananas",qty:27},{name:"apples",qty:3}], findItemsOver([{name:"apples",qty:10},{name:"pears",qty:37},{name:"pears",qty:39},{name:"bananas",qty:27},{name:"apples",qty:3}, {name:"bananas", qty:0}],1))
    });
})