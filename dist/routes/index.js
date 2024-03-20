"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.authenticationRotes = exports.fileRoutes = exports.productRotes = exports.userRotes = void 0;
var user_routes_1 = require("./user_routes");
Object.defineProperty(exports, "userRotes", { enumerable: true, get: function () { return __importDefault(user_routes_1).default; } });
var product_routes_1 = require("./product_routes");
Object.defineProperty(exports, "productRotes", { enumerable: true, get: function () { return __importDefault(product_routes_1).default; } });
var file_routes_1 = require("./file_routes");
Object.defineProperty(exports, "fileRoutes", { enumerable: true, get: function () { return __importDefault(file_routes_1).default; } });
var authentication_routes_1 = require("./authentication_routes");
Object.defineProperty(exports, "authenticationRotes", { enumerable: true, get: function () { return __importDefault(authentication_routes_1).default; } });
var Routes_1 = require("./Routes");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(Routes_1).default; } });
