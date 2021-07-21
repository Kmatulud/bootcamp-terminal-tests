let assert = require("assert");
let transportFee = require("../bootcamp-functions/transportFee");

describe("transportFee", () => {
    it("should return the right price based on the shift you are working", () => {
        assert.strictEqual('R20', transportFee('morning'));
        assert.strictEqual('R10', transportFee('afternoon'));
        assert.strictEqual('free', transportFee('nightshift'));
    });
});
