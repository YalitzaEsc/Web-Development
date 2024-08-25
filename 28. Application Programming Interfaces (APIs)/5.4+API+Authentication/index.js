import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = "escarcegaclaudia";
const yourPassword = "escarcegaclaudia";
const yourAPIKey = "6c37be7d-4103-4c62-85a4-d66eabecdc4c";
const yourBearerToken = "6d0baf0c-546c-4fdd-be10-a8c2c3f993fb";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(API_URL+"random");
    const content = JSON.stringify(response.data);
    res.render("index.ejs", { content: content });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
  const response = await axios.get(API_URL+"all?page=1", {
    auth: {
        username: yourUsername,
        password: yourPassword
    }
}); 
  const content = JSON.stringify(response.data);
  res.render("index.ejs", { content: content });
} catch (error) {
  console.error("Failed to make request:", error.message);
  res.render("index.ejs", {
    error: error.message,
  });
}

});

app.get("/apiKey", async(req, res) => {

  try {
    const response = await axios.get(API_URL + "filter?score=5&apiKey=" + yourAPIKey);
    const content = JSON.stringify(response.data);
    res.render("index.ejs", { content: content });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.get("/bearerToken", async(req, res) => {
  try {
    const response = await axios.get(API_URL + "secrets/1", config);
    const content = JSON.stringify(response.data);
    res.render("index.ejs", { content: content });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
