
import express = require("express");
import bodyParser = require("body-parser");
const sls = require("serverless-http")

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

import SimpleRouter = require("../router/simple_router");
import SimpleController from "./../controllers/simple_controller";


const simpleController = new SimpleController();
const simpleRouter = new SimpleRouter(simpleController);

app.use("/simple", simpleRouter.getRouter());

let PORT = 4000;
app.listen(PORT, () => {
  console.log("server listening on port %d in %s mode", PORT);
});

// export const App = app;

module.exports.server = sls(app)