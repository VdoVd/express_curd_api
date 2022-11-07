import express from 'express';
import bodyParser from 'body-parser';

import router from './users.js'
const app=express();
const PORT=5000

app.use(bodyParser.json());

app.use('/users',router);

app.listen(PORT,()=>console.log(`Server Running on port: http://localhost:${PORT}`))
