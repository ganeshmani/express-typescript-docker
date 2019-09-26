"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const body_parser_1 = __importDefault(require("body-parser"));
const Routes_1 = __importDefault(require("./Routes"));
const connect_1 = __importDefault(require("./connect"));
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('TS App is Running');
});
const PORT = process.env.PORT;
const db = 'mongodb://mongo:27017/test';
connect_1.default({ db });
Routes_1.default({ app });
app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
});
