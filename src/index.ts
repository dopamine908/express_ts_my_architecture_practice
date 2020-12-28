import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
    res.send('Hello, World!!');
});

app.listen(3000, () => console.log('http server is running at port 3000.'));
