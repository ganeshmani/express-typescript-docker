"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = ({ db }) => {
    const connect = () => {
        mongoose_1.default
            .connect(db, { useNewUrlParser: true })
            .then(() => {
            return console.info(`Successfully connected to ${db}`);
        })
            .catch((err) => {
            console.error(`Error connecting to database :`, err);
            return process.exit(1);
        });
    };
    connect();
    mongoose_1.default.connection.on('disconnected', connect);
};
