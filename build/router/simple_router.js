"use strict";
const express = require("express");
let router = express.Router();
class IPorgRouter {
    getRouter() {
        return router;
    }
    constructor(ISimpleController) {
        this.ISimpleController = ISimpleController;
        this.init();
    }
    init() {
        let self = this;
        router.post("/", function (request, response) {
            console.log("inside route");
            response.status(200).send({ sum: self.ISimpleController.returnSum(request, response) });
        });
    }
}
module.exports = IPorgRouter;
//# sourceMappingURL=/home/tricon/Personal/simple/build/router/simple_router.js.map