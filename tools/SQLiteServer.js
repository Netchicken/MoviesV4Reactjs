const express = require("express");
const sqlite = require("sqlite");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const bodyParser = require("body-parser");
//VideoDB.db
const databasePath = path.join(__dirname, "VideoDB.db");
const dbPromise = sqlite.open(databasePath, { Promise }, { cached: true });

console.log(databasePath);

//https://www.npmjs.com/package/sqlite
//https://medium.com/@tarkus/node-js-and-sqlite-for-rapid-prototyping-bc9cf1f26f10
//https://github.com/kriasoft/react-starter-kit
//https://www.youtube.com/watch?v=i-_cbZtwQVU

app.disable("x-powered-by");
app.use(bodyParser.json());
  
// Declaring custom routes below. Add custom routes before JSON Server router

//Add createdAt to all POSTS
app.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
//   // Continue to JSON Server router
//   next();
// });
debugger;

app.get("Movies", async (req, res, next) => {
  try {
    const db = await dbPromise; //the database
    // const [post, categories] = await Promise.all([
    db.all("SELECT * FROM Movies").then(data => {
      res.send({ data: data + "    some data" });
      console.log(data);
    });
  } catch (err) {
    console.log(err + "Error not loading.");
    next(err);
  }
});

//app.listen(port);
app.listen(port, () => console.log(`App is Alive in port: ${port}`));

// Use default router
// server.use(router);

// // Start server
// const port = 3001;
// server.listen(port, () => {
//   console.log(`JSON Server is running on port ${port}`);
// });

// const express = require("express");
// const bodyParser = require("body-parser");
// const sqlite = require("sqlite");
// const path = require("path");
//var cors = require("cors");

// const dbPromise = sqlite.open("./VideoDB.db", { Promise });
// const app = express();
// const port = 3001;

// //https://github.com/Dmendoza99/HonduPOS/blob/master/Server/index.js

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// //Gets
// app.get("/GetAllProducts", async (req, res) => {
//     const db = await dbPromise;

//   db.all("SELECT * FROM CUSTOMER").then(data => {
//     res.send({ data: data });
//   });
// });
