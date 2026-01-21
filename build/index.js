"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const get_handler_1 = __importDefault(require("./utils/get.handler"));
const post_handler_1 = __importDefault(require("./utils/post.handler"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const port = process.env.PORT || 5000;
app.post("/", (req, res) => {
    const body = req.body;
    const response = post_handler_1.default.buildResponse(body);
    res.json(response);
});
app.get("/", (req, res) => {
    const data = req.query;
    const response = get_handler_1.default.buildResponse(data);
    res.json(response);
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
