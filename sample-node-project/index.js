const express = require('express');
const os = require('os');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const hostName = os.hostname();
    const response = `hello from ${hostName} - version 2`;

    res.send(response);
});

app.listen(3000, () => {
    console.log("server started");
});