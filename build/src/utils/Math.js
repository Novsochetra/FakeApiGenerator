"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomId = void 0;
const env_1 = __importDefault(require("../config/env"));
exports.getRandomId = () => Math.floor(Math.random() * Math.floor(env_1.default.TOTAL_DATA_SIZE + 1));
