import React from 'react';
const Router = require('express');
const router = new Router();
import ReactPDF from '@react-pdf/renderer';
import MyDocument from './mydocument.js'

const generatePDF = (data) => {
    console.log('scdc')
    ReactPDF.render(<MyDocument/>, `${__dirname}/example.pdf`);
}

router.post('/pdf', (req, res) => {
        // console.log(req.body)
        ReactPDF.render(<MyDocument data={req.body} />, `${__dirname}/files/example.pdf`);
        // const x = await new Product({...rest, subcategoryId: mongoose.Types.ObjectId(subcategoryId)}).save()
        // return res.status(200).json({product: x})
})
/*

const upload = multer({storage})

router.post('/upload', upload.single('file'), function (req, res) {
    console.log(req.file)
    res.json({data: '/files/' + req.file.filename})
});
*/


module.exports = router;
