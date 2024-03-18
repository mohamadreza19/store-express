"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var StaticPath = /** @class */ (function () {
    function StaticPath() {
    }
    StaticPath.setRootDir = function (path) {
        this.rootDir = path;
    };
    Object.defineProperty(StaticPath, "public", {
        get: function () {
            if (this.rootDir) {
                return this.pathJoin(this._public);
            }
        },
        enumerable: false,
        configurable: true
    });
    StaticPath.pathJoin = function (pathToJoin) {
        if (this.rootDir)
            return path_1.default.join(this.rootDir, pathToJoin);
    };
    StaticPath._public = '/public';
    return StaticPath;
}());
exports.default = StaticPath;
