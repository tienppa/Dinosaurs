const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
