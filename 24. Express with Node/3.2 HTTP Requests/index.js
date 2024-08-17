import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => { //Requests the home page
    res.send("Hi, world!");
});

app.get("/contact", (req, res) => {
    res.send("My number is 6674511820");
});

app.get("/about", (req, res) => {
    res.send("My name is Claudia");
});

app.listen(port, () => {
    console.log("server working!");
});