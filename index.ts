// Add module alias
import 'module-alias/register';
import moduleAlias from 'module-alias';
import fs from 'fs';

moduleAlias.addAliases({
  '@': __dirname,
});

import express, { Application } from 'express';

import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi, { JsonObject } from 'swagger-ui-express';
import path from 'path';
import Routes from '@/routes';
import { connectDB } from '@/config';
import { StaticPath } from '@/global';

class App {
  public app: Application = express();
  public routes = new Routes();
  public api_base_url: string = '/api';
  public port = process.env.PORT;
  private swaggerFile: string = path.join(
    __dirname,
    'config',
    'swagger',
    'index.json'
  );
  private swaggerData: string = fs.readFileSync(this.swaggerFile, 'utf-8');
  private swaggerJSON: JsonObject = JSON.parse(this.swaggerData);

  constructor() {
    this.app = express();
    dotenv.config();
    StaticPath.setRootDir(__dirname);

    if (StaticPath.public) {
      this.app.use(
        this.api_base_url + '/public',
        express.static(StaticPath.public)
      );
    }
    //  DB CONECTION
    connectDB();
    //
    this.app.use(express.json());
    // Cors
    this.app.use(cors());

    this.routes.routes(this.app);

    this.app.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(this.swaggerJSON)
    );
    const port = process.env.PORT;
    if (port) {
      this.app.listen(port, () => {
        console.log('Server is fire at http://localhost:' + port);
      });
    }
  }
}
export default new App().app;
