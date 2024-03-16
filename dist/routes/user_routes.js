"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var controllers_1 = require("@/controllers");
var models_1 = require("@/models");
var services_1 = require("@/services");
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var userService = new services_1.UserService(models_1.UserModel);
var userConteoller = new controllers_1.UserConteoller(userService);
router.get('/users', userConteoller.getUsers);
exports.default = router;
