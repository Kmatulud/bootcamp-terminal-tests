let assert = require("assert");
let fromWhere = require("../bootcamp-functions/fromWhere");

describe("fromWhere", () => {
    it("takes a car registration number as a parameter and should return the town the car is from", () => {
        assert.strictEqual('Bellville', fromWhere('CY'));
        assert.strictEqual('Paarl', fromWhere('CJ'));
        assert.strictEqual('Cape Town', fromWhere('CA'));
        assert.strictEqual('Some other place!', fromWhere('CC'));
    })
});
