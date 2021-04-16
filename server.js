const express = require('express');
const app = express();
const router = require('./routes');

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server listening ${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);