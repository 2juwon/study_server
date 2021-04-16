const express = require('express');
const router = express.Router();
const apis = require('./apis');

router.get('/', (req, res) => {
    res.send('Welcome!!');
});

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.use('/api', apis);
module.exports = router;
