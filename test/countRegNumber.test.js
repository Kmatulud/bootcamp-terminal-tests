let assert = require("assert");
let countRegNumber = require("../bootcamp-functions/countRegNumber");

describe("countRegNumber", () => {
    it("should return the number of registration numbers in the string", () => {
        assert.strictEqual(3, countRegNumber("CA 182736,CY 523519,CJ 812328"))
        assert.strictEqual(2, countRegNumber("CA 42665, AA 12 RT GP"));
        assert.strictEqual(1, countRegNumber("CA 182736"));
    });
});
