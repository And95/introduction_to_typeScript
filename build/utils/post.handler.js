"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const age_helper_1 = __importDefault(require("../helpers/age.helper"));
const date_helper_1 = __importDefault(require("../helpers/date.helper"));
class PostHandler {
    static buildResponse(input) {
        const response = {
            id: Math.random().toString(),
            name: input.name,
            email: input.email,
            isAdult: age_helper_1.default.isAdult(input.age),
            dataCadastro: date_helper_1.default.obterDataAgora(),
        };
        return response;
    }
}
exports.default = PostHandler;
