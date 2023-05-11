const express = require('express');
const connectDB = require("./config/dbConnection");
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();

connectDB();  //connection the database in server.js
const app = express();

const port = process.env.PORT || 5000;

//help to parser the data stream to convert it into json
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoute"))
app.use("/api/users", require("./routes/userRoute"));

app.use(errorHandler)

app.listen(port, () => {
    console.log(`server listening on ${port}`);
})