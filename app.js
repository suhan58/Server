const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();

app.use("/graphql",graphqlHTTP({

}));

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Server is running ${port}...`);
});

module.exports = server; 
