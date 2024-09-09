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
  database: "secrets",
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

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {

  const email = req.body.username;
  const password = req.body.password;

  try {
    const consulta = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if (consulta.rows.length > 0){
      res.send("Email already exists. Try loging in.")
    } else {
      await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", 
        [email, password]);
        res.render("secrets.ejs");
    }

  } catch (err){
    console.log(err);
  }
  
  
});

app.post("/login", async (req, res) => {

  const email = req.body.username;
  const password = req.body.password;

  try {

    const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);
    const pass = result.rows[0].password;
    console.log(pass);

    if (result.rows.length == 0){
      res.send("Email doesn't exist. Try loging up.")
    } else {
      if(password == pass){
        res.render("secrets.ejs");
      } else {
        res.send("Incorrect password. Try again.")
      }
    }

  } catch (err) {
    console.log(err);
  }

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
