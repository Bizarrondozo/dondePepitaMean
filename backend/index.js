const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/db');
const Product = require("./routes/product");
const Store = require("./routes/store");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/product", Product);
app.use("/api/store", Store);

app.listen(process.env.PORT, () => console.log("Backend server running on port " + process.env.PORT));

dbConnection();