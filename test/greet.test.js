let assert = require("assert");
let greet = require("../bootcamp-functions/greet");

describe("The greet function", function () {
	it("should greet Andrew correctly", function () {
		assert.strictEqual("Hello, Andrew", greet("Andrew"));
	});
	it("should greet Karen correctly", function () {
		assert.strictEqual("Hello, Karen", greet("Karen"));
	});
});
