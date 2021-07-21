let assert = require("assert");
let isFromBellville = require("../bootcamp-functions/isFromBellville");
describe("isFromBellville", () => {
    it("Should return true if a registration number is for Bellville(CY) otherwise returns false.", () => {
        assert.strictEqual(true, isFromBellville("CY 123"));
        assert.strictEqual(false, isFromBellville("CJ 123"));
    });
});
