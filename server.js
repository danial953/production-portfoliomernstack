const express = require("express");
const cors = require("cors");
const path = require("path");
require("./db/config");
const User = require("./db/User");
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const rootPath = "./my-app/build"; // Adjust the path as needed
app.use(express.static(rootPath));

// Main
app.post("/sendmessage", async (req, res) => {
  try {
    // Create a new User instance
    const user = new User(req.body);

    // Save the user to the database
    await user.save();

    // Use properties from req.body
    const { name, email, description } = req.body;

    // Send a response with the extracted properties
    res.send({ name, email, description });
  } catch (error) {
    console.error("Error saving user:", error);
    res
      .status(500)
      .send(
        "Sorry, something went wrong. Please try again after a few minutes."
      );
  }
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./my-app/build/index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

/*const express = require("express");
const cors = require("cors");
const path = require("path");
const serveStatic = require("serve-static");
const rootPath = "/my-app/build/index.html";
// ...
app.use(serveStatic(rootPath));

require("./db/config");
const User = require("./db/User");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join, "./my-app/build"));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./my-app/build/index.html"));
});
// Main
app.post("/sendmessage", async (req, res) => {
  try {
    // Create a new User instance
    const user = new User(req.body);

    // Save the user to the database
    await user.save();

    // Use properties from req.body
    const { name, email, description } = req.body;

    // Send a response with the extracted properties
    res.send({ name, email, description });
  } catch (error) {
    console.error("Error saving user:", error);
    res
      .status(500)
      .send(
        "Sorry, something went wrong. Please try again after a few minutes."
      );
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running at this ${PORT}`);
});

/*const express = require("express");

const cors = require("cors");

require("./db/config");
const User = require("./db/User");

const app = express();
app.use(express.json());
app.use(cors());
//main
app.post("/sendmessage", async (req, res) => {
  let user = await new User(req.body);
  if (user) {
    // Use properties from req.body
    const { name, email, description } = req.body;
    res.send({ name, email, description });
  } else {
    res.send(
      "Sorry, something went wrong. Please try again after a few minutes."
    );
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running at this ${PORT}`);
});*/
