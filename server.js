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
