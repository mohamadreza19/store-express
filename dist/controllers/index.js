"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationController = exports.FileContoller = exports.ProductConteoller = exports.UserConteoller = void 0;
var UserConteoller_1 = require("./UserConteoller");
Object.defineProperty(exports, "UserConteoller", { enumerable: true, get: function () { return __importDefault(UserConteoller_1).default; } });
var ProductContoller_1 = require("./ProductContoller");
Object.defineProperty(exports, "ProductConteoller", { enumerable: true, get: function () { return __importDefault(ProductContoller_1).default; } });
var FileContoller_1 = require("./FileContoller");
Object.defineProperty(exports, "FileContoller", { enumerable: true, get: function () { return __importDefault(FileContoller_1).default; } });
var AuthenticationController_1 = require("./AuthenticationController");
Object.defineProperty(exports, "AuthenticationController", { enumerable: true, get: function () { return __importDefault(AuthenticationController_1).default; } });
