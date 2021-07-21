let assert = require("assert");
let countAllPaarl = require("../bootcamp-functions/countAllPaarl");

describe("countAllPaarl", () => {
	it("takes in a parameter string with registration numbers separated with commas and should return the number of registration numbers in the string for Paarl", () => {
		assert.strictEqual(3, countAllPaarl("CJ 900, CJ 678 543, CA 34567, CJ 67890, CN 7864"));
		assert.strictEqual(1, countAllPaarl("CJ 678 543"));
		assert.strictEqual(1, countAllPaarl("CJ 67890"));
	});
});
