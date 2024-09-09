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
  database: "permalist",
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

  const consulta = await db.query("SELECT * FROM items ORDER BY id ASC");
  let items = consulta.rows;

  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const item_title = req.body.updatedItemTitle;
  const item_id = req.body.updatedItemId;

  await db.query("UPDATE items SET title = $1 WHERE id = $2", [item_title, item_id]);
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const itemID = req.body.deleteItemId;

  await db.query("DELETE FROM items WHERE id = $1", [itemID]);
  res.redirect("/");

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
