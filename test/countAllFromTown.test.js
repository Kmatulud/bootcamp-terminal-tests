let assert = require("assert");
let allFromTown = require("../bootcamp-functions/countAllFromTown");

describe("countAllFromTown", () => {
    it("It should return the number of registration numbers in the string that is for that town", () => {
        assert.strictEqual(3, allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'))
        assert.strictEqual(1, allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ'))
        assert.strictEqual(0, allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF'))
    });
});
