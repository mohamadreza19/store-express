import express, { Express, Request, Response, Application } from 'express';

import { connectDB } from '@config/index';
import dotenv from 'dotenv';
import { userRotes, authenticationRotes } from '@routes/index';

const api_base_url = '/api';

// routes

dotenv.config();

const app: Application = express();

//  DB CONECTION
connectDB();

const port = process.env.PORT;

app.use(express.json());
app.use(api_base_url, userRotes);
app.use(api_base_url, authenticationRotes);

app.listen(port, () => {
  console.log('Server is fire at http://localhost:' + port);
});
