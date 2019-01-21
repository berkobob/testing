const utils = require("./utils");
const expect = require("expect");

describe("Utils", () => {
    describe("#add", () => {
        it("should add two numbers", () => {
            var res = utils.add(33, 11);
            expect(res)
                .toBe(44)
                .toBeA("number");
        });
    });

    it("should async add two numbers", done => {
        utils.asyncAdd(4, 3, sum => {
            expect(sum)
                .toBe(7)
                .toBeA("number");
            done();
        });
    });

    it("should square a number", () => {
        var res = utils.square(3);
        expect(res)
            .toBeA("number")
            .toBe(9);
    });

    it("should async square a number", done => {
        utils.asyncSquare(4, res => {
            expect(res)
                .toBeA("number")
                .toBe(16);
            done();
        });
    });
});

it("should expect some value", () => {
    expect(12).toNotBe(11);
    expect({ name: "Antoine" }).toEqual({ name: "Antoine" });
    expect([1, 2, 3]).toInclude(2);
    expect([1, 2, 3]).toExclude(4);

    expect({
        name: "Antoine",
        Age: 48,
        Location: "UK",
    }).toInclude({ Age: 48 });
});

it("should set first name and last name", () => {
    var user = { location: "Berko", age: 48 };
    var res = utils.setName(user, "Antoine Lever");

    expect(res).toInclude({
        firstName: "Antoine",
        lastName: "Lever",
    });
});
