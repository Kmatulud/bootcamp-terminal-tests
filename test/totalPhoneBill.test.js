let assert = require("assert");
let totalPhoneBill = require("../bootcamp-functions/totalPhoneBill");

describe("totalPhoneBill", () => {
    it("takes in a string of calls made and sms's sent and should calculate the total bill for the data provided", () => {
        assert.strictEqual('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.strictEqual('R3.40', totalPhoneBill('call, sms'));
        assert.strictEqual('R1.30', totalPhoneBill('sms, sms'));
    })
});
