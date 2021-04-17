import express from 'express';
import apis from './apis';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome!!');
});

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.use('/api', apis);
module.exports = router;
