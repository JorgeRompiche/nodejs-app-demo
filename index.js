const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

var server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Demo NodeJS server listening at ${host}:${port}`);
});