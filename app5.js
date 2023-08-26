// Express
const express = require("express");
const app = express();
// DB
const mongoose = require("mongoose");
// Parser
const bodyParser = require("body-parser");
// Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
// SocketIO
const http = require("http");
const socketIO = require("socket.io");
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Use Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const cors = require("cors");
app.use(cors());

const customEnv = require("custom-env");
customEnv.env(process.env.NODE_ENV, "./config");
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

// Socket IO
const io = socketIO(server);
// Make the io instance globally accessible
app.set("socketio", io);
// New connections
io.on("connection", (socket) => {
  console.log("A user connected");

  // Disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const Items = require("./routes/item.js");
app.use("/item", Items);
const Users = require("./routes/user.js");
app.use("/user", Users);
const Purchase = require("./routes/purchase.js");
app.use("/purchase", Purchase);
const StoreLocation = require("./routes/storeLocation.js");
app.use("/storeLocation", StoreLocation);


console.log("Server started");
app.listen(3000);
