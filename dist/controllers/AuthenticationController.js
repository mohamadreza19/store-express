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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = __importDefault(require("bcrypt"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var generateAccessToken_1 = __importDefault(require("@/helper/string/generateAccessToken"));
var generateRefreshToken_1 = __importDefault(require("@/helper/string/generateRefreshToken"));
var AuthenticationController = /** @class */ (function () {
    function AuthenticationController(userService) {
        var _this = this;
        this.login = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, password, username, user, isPasswordMatch, accessToken, refreshToken, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, password = _a.password, username = _a.username;
                        if (!username) {
                            return [2 /*return*/, res.status(400).json('username is required')];
                        }
                        if (!password) {
                            return [2 /*return*/, res.status(400).json('password is required')];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.userService.getUser({ username: username })];
                    case 2:
                        user = _b.sent();
                        if (!user) {
                            return [2 /*return*/, res.status(401).json({
                                    message: 'Invalid username or password',
                                })];
                        }
                        if (!password) {
                            return [2 /*return*/, res.status(401).json({
                                    message: 'Invalid username or password',
                                })];
                        }
                        return [4 /*yield*/, bcrypt_1.default.compareSync(password, user.password)];
                    case 3:
                        isPasswordMatch = _b.sent();
                        if (!isPasswordMatch) {
                            return [2 /*return*/, res.status(401).json({
                                    message: 'Invalid username or password',
                                })];
                        }
                        accessToken = (0, generateAccessToken_1.default)(user);
                        refreshToken = (0, generateRefreshToken_1.default)(user);
                        // console.log('passwordMatch' + passwordMatch);
                        res.json({ accessToken: accessToken, refreshToken: refreshToken });
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        console.log('Internal Error AuthenticationController 43:' + error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.register = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, password, username, email, passwordCheck, hashedPassword, user, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, password = _a.password, username = _a.username, email = _a.email, passwordCheck = _a.passwordCheck;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        if (!username) {
                            return [2 /*return*/, res.status(400).json('username is required')];
                        }
                        if (!password) {
                            return [2 /*return*/, res.status(400).json('password is required')];
                        }
                        if (!email) {
                            return [2 /*return*/, res.status(400).json('email is required')];
                        }
                        if (!passwordCheck) {
                            return [2 /*return*/, res.status(400).json('passwordCheck is required')];
                        }
                        if (password !== passwordCheck) {
                            return [2 /*return*/, res.status(400).json('password and passwordCheck are not same')];
                        }
                        return [4 /*yield*/, bcrypt_1.default.hash(password, 10)];
                    case 2:
                        hashedPassword = _b.sent();
                        return [4 /*yield*/, this.userService.createUser({
                                username: username,
                                password: hashedPassword,
                                email: email,
                            })];
                    case 3:
                        user = _b.sent();
                        res.status(201).json(user);
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _b.sent();
                        console.log('Internal Error' + error_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.refreshToken = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var refreshToken, secretKey;
            return __generator(this, function (_a) {
                refreshToken = req.body.refreshToken;
                if (!refreshToken) {
                    return [2 /*return*/, res.status(401).json({
                            message: 'refreshToken is required',
                        })];
                }
                secretKey = process.env.REFRESH_KEY;
                if (secretKey) {
                    jsonwebtoken_1.default.verify(refreshToken, secretKey, function (err, decoded) {
                        console.log(err); // bar
                        if (err) {
                            return res.sendStatus(403);
                        }
                        var accessToken = (0, generateAccessToken_1.default)(decoded);
                        res.json({ accessToken: accessToken });
                    });
                }
                return [2 /*return*/];
            });
        }); };
        this.userService = userService;
    }
    return AuthenticationController;
}());
exports.default = AuthenticationController;
