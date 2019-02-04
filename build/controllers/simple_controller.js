"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleController {
    returnSum(request, response) {
        let arr = request.body.arr;
        console.log(request.body);
        let sum = arr.reduce((a, b) => a + b, 0);
        console.log(sum);
        return sum;
    }
}
exports.default = SimpleController;
//# sourceMappingURL=/home/tricon/Personal/simple/build/controllers/simple_controller.js.map