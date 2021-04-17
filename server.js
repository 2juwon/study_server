import express from 'express';
import router from './routes';

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server listening ${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);
app.use((req, res, next) => {
    res.status(404);
    res.json({ error: 'Not found🤣' });
    // if (req.accepts('html')) {
    //     res.render('404', { url: req.url });
    //     return;
    // }

    // if (req.accepts('json')) {
    //     res.json({ error: 'Not found🤣' });
    //     return;
    // }

    // res.type('txt').send('Not found🤣');
});
