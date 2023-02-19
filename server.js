import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import MyDocument from './mydocument.js'

ReactPDF.render(<MyDocument />, `${__dirname}/files/example.pdf`);
/*
require('dotenv').config();
const authRouter = require('./router');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use('/', authRouter);
app.use('/files', express.static('files'));

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log('started on ' + PORT)
});
*/
