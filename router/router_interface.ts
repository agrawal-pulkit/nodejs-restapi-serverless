import express = require("express");
import { Router } from "express";

let router: Router = express.Router();

interface I_Router {
  getRouter(): Router;
}
export = I_Router;