"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const welcome_helper_1 = __importDefault(require("../helpers/welcome.helper"));
class GetHandler {
    static buildResponse(input) {
        const response = {
            mensagem: welcome_helper_1.default.createMenssage(input),
        };
        return response;
    }
}
exports.default = GetHandler;
