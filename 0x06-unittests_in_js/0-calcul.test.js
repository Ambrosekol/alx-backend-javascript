var calcul = require("./0-calcul.js");
const assert = require("assert");

describe("calculateNumber", function () {
    it("should say hello", function () {
        assert.equal(calcul(2, 3), 5)
    })
})