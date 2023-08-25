const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger"); // Path to your swagger.js configuration

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Use Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const cors = require("cors");
app.use(cors());

const customEnv = require("custom-env");
customEnv.env(process.env.NODE_ENV, "./config");
console.log(process.env.CONNECTION_STRING);
// mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})

db = {
  name: "TypeT",
  host: process.env.HOST_MONGODB || "127.0.0.1:27017",
  opts: {},
};

mongoose.connect(`mongodb://${db.host}/${db.name}`, db.opts);

// app.use(bodyParser());
app.use(express.static("public"));
// app.use(cookieParser());
app.set("view engine", "ejs");
// app.use('/articles', routerArticles);

const Items = require("./routes/item.js");
app.use("/items", Items);
const Users = require("./routes/user.js");
app.use("/users", Users);
const Purchase = require("./routes/purchase.js");
app.use("/purchase", Purchase);

console.log("Server started");
app.listen(3000);
