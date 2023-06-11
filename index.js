const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const port = process.env.PORT || 3937;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
const flightRouter = require("./flightDetails")
app.use("/api",flightRouter)
app.listen(port, () => {
console.log('server is running on port'+port);
});