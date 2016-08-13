/**
 * Created by alex on 8/13/2016.
 */

import { json } from 'body-parser';
import express = require('express');
import mongoose = require('mongoose');
import graffiti from '@risingstack/graffiti';
import { getSchema } from '@risingstack/graffiti-mongoose';

import {URI} from "./config/mongoose";
import User from "./app/model/User";

mongoose.connect(URI, error => console.log(error));

const port = process.env.PORT || 8080;

const app = express();

app.use(json());

app.use(<any>graffiti.express(<any>{
  schema: getSchema([User])
}));

const router = express.Router();

app.listen(port);
console.log(`App listening on port ${port}`);
