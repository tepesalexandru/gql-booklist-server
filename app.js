const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const URL_MLAB =
  "mongodb+srv://george:Alex123@gql-books-fq4ep.mongodb.net/test?retryWrites=true&w=majority";

const cors = require("cors");

const app = express();

// Allow cross origin requests
app.use(cors());

mongoose.connect(URL_MLAB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
