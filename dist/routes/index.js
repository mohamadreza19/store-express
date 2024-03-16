"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationRotes = exports.userRotes = void 0;
var user_routes_1 = require("./user_routes");
Object.defineProperty(exports, "userRotes", { enumerable: true, get: function () { return __importDefault(user_routes_1).default; } });
var authentication_routes_1 = require("./authentication_routes");
Object.defineProperty(exports, "authenticationRotes", { enumerable: true, get: function () { return __importDefault(authentication_routes_1).default; } });
