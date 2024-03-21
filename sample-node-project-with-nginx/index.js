const express = require('express');
const os = require('os');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const hostName = os.hostname();
    const response = `hello from ${hostName} - version 2`;

    res.send(response);
});

app.get('/nginx', async (req, res) => {
    try {
        const url = 'http://nginx';
        const options = {
            url,
            method: 'GET'
        }
        const response = await axios(options);
        const body = await response.data;

        res.send(body);
    } catch (err) {
        console.log(err.message);

        res.send('error occured');
    }
});


app.listen(PORT, () => {
    console.log("server started");
});