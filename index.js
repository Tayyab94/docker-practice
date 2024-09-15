const express = require("express")

const app = express();

app.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            name: "tayyab bas",
            age: 23
        }, {
            id: 2,
            name: "Bhatti shb",
            age: 12
        }, {
            id: 3,
            name: "Ahmad Ali",
            age: 15
        },
    ])
});

app.listen(5000, () => {
    console.log("app is running under 5000");
})