import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "98490133",
  port: 5432,
});

db.connect((err) =>{
  if(err){
    console.log(err.stack)
  } else {
    console.log("Connected.")
  }
});


app.get("/", async (req, res) => {

  let consult = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];

  consult.rows.forEach((country) => {
    countries.push(country.country_code);
  });

  res.render("index.ejs", {countries: countries, total: countries.length})
  db.end();
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
