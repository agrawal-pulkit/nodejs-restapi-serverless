import { Request, Response } from "express";
import ISimpleController from "./simple_controller_interface";

export default class SimpleController implements ISimpleController {
  returnSum(request: Request, response: Response): number{
    let arr: Array<number> = request.body.arr
    console.log(request.body)
    let sum: number = arr.reduce((a: number, b: number) => a + b, 0);
    console.log(sum)
    return sum
  }
}