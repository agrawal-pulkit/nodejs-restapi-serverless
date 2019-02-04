
import { Request, Response } from "express";

export default interface ISimpleController {
    returnSum(request: Request, response: Response): void;
}
