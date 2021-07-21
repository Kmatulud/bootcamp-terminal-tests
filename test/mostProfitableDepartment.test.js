let assert = require("assert");
let mostProfitableDepartment = require("../bootcamp-functions/mostProfitableDepartment");

describe("mostProfitableDepartment", () => {
    it("should determine which of their departments are the most profitable", () => {
         assert.strictEqual("carpentry", mostProfitableDepartment([{department : "hardware",sales:4500,day : "Monday"},{department : "outdoor",sales:1500,day : "Monday"},{department : "carpentry",sales:5500,day : "Monday"}]))

         assert.strictEqual("outdoor", mostProfitableDepartment([{department : "hardware",sales:4500,day : "Monday"},{department : "outdoor",sales:19500,day : "Monday"},{department : "carpentry",sales:5500,day : "Monday"}]))

         assert.strictEqual("hardware", mostProfitableDepartment([{department : "hardware",sales:45000,day : "Monday"},{department : "outdoor",sales:1500,day : "Monday"},{department : "carpentry",sales:5500,day : "Monday"}]))
    })
});
