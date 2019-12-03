const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("API running1"));
app.get("/home", (req, res) => res.send("home"));

app.get("/about", (req, res) => res.send("about"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
