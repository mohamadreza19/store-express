'use strict';
require('module-alias/register');

const moduleAlias = require('module-alias');

moduleAlias.addAliases({
  '@': __dirname,
});

// console.log(__dirname + 'MEO');
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = __importDefault(require('express'));
var dotenv_1 = __importDefault(require('dotenv'));
var routes_1 = require('@/routes');
var config_1 = require('@/config');
var api_base_url = '/api';
// routes
dotenv_1.default.config();
var app = (0, express_1.default)();
//  DB CONECTION
(0, config_1.connectDB)();
var port = process.env.PORT;
app.use(express_1.default.json());
app.use(api_base_url, routes_1.userRotes);
app.use(api_base_url, routes_1.authenticationRotes);
app.listen(port, function () {
  console.log('Server is fire at http://localhost:' + port);
});
