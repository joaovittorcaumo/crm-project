import express = require('express');
import { UserController } from './controllers/UserController';

const app = express();
const router = app.get('/register',  new UserController().register);

export { router };