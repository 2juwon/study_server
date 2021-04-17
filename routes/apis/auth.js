import express from 'express';
import Joi from 'joi';

const router = express.Router();

const validateBody = (keys) => async (req, res, next) => {
    console.log(`body : ${req.body}`);

    try {
        const schema = Joi.object().keys(keys);

        const { value, error } = await schema
            .validateAsync(req.body)
            .catch((err) => console.log(err));

        console.log(`error: ${error}, value : ${value}`);

        if (!error) {
            next();
        } else {
            res.status(422).json({
                result: false,
                message: error.toString(),
            });
        }
    } catch (error) {
        res.status(422).json({
            result: false,
            message: error.toString(),
        });
    }
};

router.get('/', (req, res) => {
    res.send('Hello~ Auth API!');
});

router.post('/login', async (req, res) => {
    const schema = Joi.object().keys({
        id: Joi.string().required(),
        password: Joi.string().required(),
    });

    try {
        const value = await schema.validateAsync(req.body);
        console.log(`value : ${JSON.stringify(value)}`);

        const { id, password } = value;

        if (id == 'test' && password == '1234') {
            return res.status(200).json({
                result: true,
            });
        }

        res.status(401).json({
            result: false,
            error: 'not match id, password',
        });
    } catch (error) {
        res.status(422).json({
            result: false,
            message: error.toString(),
        });
    }
});

router.post('/signup', (req, res) => {
    res.send('not found🤣');
});

module.exports = router;
