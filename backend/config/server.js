const express = require("express");
const app = express();
const db = require("../config/connect");
const router = require("../controllers/router");
const cors = require("cors");
const port = 8009;

app.use(express.json());
app.use(cors());
app.use(router);


app.listen(port, () => {
 console.log(`Server start at port no: ${port}`);

})