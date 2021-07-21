let assert = require("assert");
let isWeekday = require("../bootcamp-functions/isWeekday");

describe("isWeekday", () => {
    it("should return true if the parameter passed in is a day of the week otherwise returns false", () => {
			assert.strictEqual(false, isWeekday("Saturday"));
			assert.strictEqual(false, isWeekday("Sunday"));

			assert.equal(true, isWeekday("Monday"));
			assert.equal(true, isWeekday("Tuesday"));
			assert.equal(true, isWeekday("Wednesday"));
		});
});