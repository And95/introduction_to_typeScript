"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const age_helper_1 = __importDefault(require("./age.helper"));
class WelcomeHelper {
    static createMenssage(input) {
        let Menssage = "Boas vindas, ";
        if (input.name && input.name.trim().length > 0) {
            Menssage = Menssage + input.name;
        }
        else {
            Menssage = Menssage + "Visitante";
        }
        if (input.age) {
            const isAdult = age_helper_1.default.isAdult(input.age);
            isAdult
                ? (Menssage = Menssage + ", você é maior de idade.")
                : (Menssage = Menssage + ", você é menor de idade.");
        }
        else {
            Menssage = Menssage + ", não consegui identificar sua idade.";
        }
        return Menssage;
    }
}
exports.default = WelcomeHelper;
