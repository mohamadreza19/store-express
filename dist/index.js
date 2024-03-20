"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Add module alias
require("module-alias/register");
var module_alias_1 = __importDefault(require("module-alias"));
var fs_1 = __importDefault(require("fs"));
module_alias_1.default.addAliases({
    '@': __dirname,
});
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var path_1 = __importDefault(require("path"));
var routes_1 = __importDefault(require("@/routes"));
var config_1 = require("@/config");
var global_1 = require("@/global");
var App = /** @class */ (function () {
    function App() {
        this.app = (0, express_1.default)();
        this.routes = new routes_1.default();
        this.api_base_url = '/api';
        this.port = process.env.PORT;
        this.swaggerFile = path_1.default.join(__dirname, 'config', 'swagger', 'index.json');
        this.swaggerData = fs_1.default.readFileSync(this.swaggerFile, 'utf-8');
        this.swaggerJSON = JSON.parse(this.swaggerData);
        this.app = (0, express_1.default)();
        dotenv_1.default.config();
        global_1.StaticPath.setRootDir(__dirname);
        if (global_1.StaticPath.public) {
            this.app.use(this.api_base_url + '/public', express_1.default.static(global_1.StaticPath.public));
        }
        //  DB CONECTION
        (0, config_1.connectDB)();
        //
        this.app.use(express_1.default.json());
        // Cors
        this.app.use((0, cors_1.default)());
        this.routes.routes(this.app);
        this.app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(this.swaggerJSON));
        var port = process.env.PORT;
        if (port) {
            this.app.listen(port, function () {
                console.log('Server is fire at http://localhost:' + port);
            });
        }
    }
    return App;
}());
exports.default = new App().app;
