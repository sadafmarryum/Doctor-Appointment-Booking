const express = require("express");
const app = express();
const db = require('./db/connect');
const router = require("./routes/router");
const cors = require("cors");
const port = 8009;


app.use(express.json());
app.use(cors());
app.use(router);


app.listen(port, () => {
 console.log(`Server start at port no: ${port}`);

})