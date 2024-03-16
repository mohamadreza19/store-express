"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function generateAccessToken(user) {
    var secretKey = process.env.REFRESH_KEY;
    if (secretKey) {
        return jsonwebtoken_1.default.sign({ userId: user._id }, secretKey, {
            expiresIn: '15m',
        });
    }
}
exports.default = generateAccessToken;
