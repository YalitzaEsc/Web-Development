import express from "express";

const app = express();
const port = 3000;
const date = new Date();
const day = date.getDay();
var phrase = "";

function whatDay (day){
    if (day === 5 || day === 6 || day === 0){
        phrase = "Hey! It's the weekend, it's time to have fun!";
    }else {
        phrase = "Hey! It's a weekday, it's time to work hard!";
    }
}

app.get("/", (req, res) => {
    whatDay(day);
    res.render("index.ejs",
        {day: phrase}
    );
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });