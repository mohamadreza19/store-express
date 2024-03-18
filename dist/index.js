"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Add module alias
require("module-alias/register");
var module_alias_1 = __importDefault(require("module-alias"));
module_alias_1.default.addAliases({
    '@': __dirname,
});
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var routes_1 = require("@/routes");
var config_1 = require("@/config");
var global_1 = require("@/global");
var api_base_url = '/api';
// routes
dotenv_1.default.config();
var app = (0, express_1.default)();
global_1.StaticPath.setRootDir(__dirname);
if (global_1.StaticPath.public) {
    app.use(api_base_url + '/public', express_1.default.static(global_1.StaticPath.public));
}
//  DB CONECTION
(0, config_1.connectDB)();
var port = process.env.PORT;
app.use(express_1.default.json());
app.use(api_base_url, routes_1.userRotes);
app.use(api_base_url, routes_1.productRotes);
app.use(api_base_url, routes_1.fileRoutes);
// app.use(api_base_url, authenticationRotes);
app.listen(port, function () {
    console.log('Server is fire at http://localhost:' + port);
});
