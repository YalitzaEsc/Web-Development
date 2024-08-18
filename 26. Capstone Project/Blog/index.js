import express from "express";
import bodyParser from "body-parser";

const app = new express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

var titles = [];
var texts = [];


app.post("/submit", (req, res) => {

    titles.push(req.body["title"]);
    texts.push(req.body["text"]);

    res.render("index.ejs", {titles: titles, texts: texts});
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });