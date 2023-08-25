const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TypeT API Documentation",
      version: "1.0.0",
    },
    tags: [
      {
        name: "Purchase",
        description: "API for managing purchases",
      },
      {
        name: "User",
        description: "API for managing users",
      },
      {
        name: "Item",
        description: "API for managing items",
      },
    ],
  },
  // Path to the API docs
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
