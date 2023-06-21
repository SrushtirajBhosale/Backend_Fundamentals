const express = require("express");
const app = express();
require("./RestfulAPI/src/db/connection");
const router = require("./RestfulAPI/src/routers/team_crud");

const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
})