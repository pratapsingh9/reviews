import express from "express";
const app = express();
app.get('/', (req, res) => {
    res.send("Hello workding hain");
});
app.listen(800, function () {
    console.log("Working Properly");
});
