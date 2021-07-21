let assert = require("assert");
let regCheck = require("../bootcamp-functions/regCheck");

describe("regCheck", () => {
    it("should check if a registration number is for GP, L, EC, MP registration plates(return true or false", () => {
        assert.strictEqual(true, regCheck("DV 23 NB GP", "GP"));
        assert.strictEqual(false, regCheck("DV 23 LP GP", "MP"));
        assert.strictEqual(false, regCheck("CY 189-012", "CY"));
        assert.strictEqual(false, regCheck("CY 189-012", "ND"));
    })
});
