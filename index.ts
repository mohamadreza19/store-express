import express, { Express, Request, Response, Application } from 'express';
import path from 'path';

import dotenv from 'dotenv';
import { fileRoutes, productRotes, userRotes } from '@/routes';
import { connectDB } from '@/config';
import { StaticPath } from '@/global';

const api_base_url = '/api';

// routes

dotenv.config();

const app: Application = express();

StaticPath.setRootDir(__dirname);

if (StaticPath.public) {
  app.use(api_base_url + '/public', express.static(StaticPath.public));
}

//  DB CONECTION
connectDB();

const port = process.env.PORT;

app.use(express.json());
app.use(api_base_url, userRotes);
app.use(api_base_url, productRotes);
app.use(api_base_url, fileRoutes);
// app.use(api_base_url, authenticationRotes);

app.listen(port, () => {
  console.log('Server is fire at http://localhost:' + port);
});
