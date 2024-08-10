import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello!</h1>");
})

app.get("/contact", (req, res) => {
    res.send("This is my contact page!")
});

app.get("/about", (req, res) => {
    res.send("This is my about page!")
});

app.listen(port, () => {
    console.log("Server running on port 3000.")
})