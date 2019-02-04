import express = require("express");
import { Request, Response, Router } from "express";
import ISimpleController from "../controllers/simple_controller_interface";
import I_Router = require("./router_interface");

let router: Router = express.Router();


class IPorgRouter implements I_Router {
    ISimpleController: ISimpleController;
    public getRouter(): Router {
        return router;
    }

    constructor(ISimpleController: ISimpleController) {
        this.ISimpleController = ISimpleController;
        this.init();
    }

    private init() {
        let self = this;
        
        router.post("/", function (request: Request, response: Response) {
            console.log("inside route")
            response.status(200).send({ sum: self.ISimpleController.returnSum(request, response)});
        });

    }

} export = IPorgRouter;