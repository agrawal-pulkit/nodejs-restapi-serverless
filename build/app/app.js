"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const sls = require("serverless-http");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const SimpleRouter = require("../router/simple_router");
const simple_controller_1 = require("./../controllers/simple_controller");
const simpleController = new simple_controller_1.default();
const simpleRouter = new SimpleRouter(simpleController);
app.use("/simple", simpleRouter.getRouter());
let PORT = 4000;
app.listen(PORT, () => {
    console.log("server listening on port %d in %s mode", PORT);
});
// export const App = app;
module.exports.server = sls(app);
//# sourceMappingURL=/home/tricon/Personal/simple/build/app/app.js.map