const express = require('express');
const app = express();

// creating a webserver :: 3000
app.get('/', (req, res) => {
    res.send('Hello World 2');
}
);
app.listen(3000);