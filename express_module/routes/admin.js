const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

router.use('/add-product', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

module.exports = router;