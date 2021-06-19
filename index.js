const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP, graphiql } = require("express-graphql");
const schema = require("./schema/schema");

const app = express();
const port = process.env.PORT || 7000;

mongoose.connect(
  "mongodb://u1l1h9du1cr64doepctd:xuJHFBr9bX99jzr1UKry@b61fyzpfirdrw6i-mongodb.services.clever-cloud.com:27017/b61fyzpfirdrw6i"
);
mongoose.connection.once("open", () => console.log("database connected"));
mongoose.connection.on("error", () => console.log("database error"));

//Middlware
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => console.log(`Listening on port ${port}`));
