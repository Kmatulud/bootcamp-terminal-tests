let assert = require("assert");
const internal = require("stream");
let yearsAgo = require("../bootcamp-functions/yearsAgo");

describe('yearsAgo', () => {
    it("takes in a year and should return how many years ago that year is from the current year", () => {
        assert.strictEqual(21, yearsAgo(2000));
        assert.strictEqual(11, yearsAgo(2010));
        assert.strictEqual(1, yearsAgo(2020));
    });
})
