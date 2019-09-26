"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_controller_1 = __importDefault(require("../Controllers/User.controller"));
exports.default = ({ app }) => {
    app.post('api/user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield User_controller_1.default.CreateUser({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        });
        return res.send({ user });
    }));
};
