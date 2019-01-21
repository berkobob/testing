const expect = require("expect");
const rewire = require("rewire");

var app = rewire("./app");

describe("App", () => {
    var db = {
        saveUser: expect.createSpy(),
    };
    app.__set__("db", db);

    it("should call the spy correctly", () => {
        var spy = expect.createSpy();
        spy("Antoine", 48);
        //expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith("Antoine", 48);
    });

    it("should call save user with the user object", () => {
        var email = "me@example.com";
        var password = "topsecret";

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({
            email,
            password,
        });
    });
});
