const express = require("express");

var app = express();

app.get("/", (req, res) => {
    res.status(200).send({
        error: "Page not found",
        name: "Todo App v1.0",
    });
});

app.get("/users", (req, res) => {
    users = [
        {
            name: "Antoine",
            age: 48,
        },
        {
            name: "Sophie",
            age: 14,
        },
        {
            name: "Amy",
            age: 11,
        },
    ];

    res.send(users);
});

app.listen(3000);
module.exports.app = app;
