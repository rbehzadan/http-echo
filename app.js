const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('*', (req, res) => {
    // Construct the response JSON
    const responseContent = {
        method: req.method,
        path: req.path,
        headers: req.headers,
        body: req.body
    };
    
    res.json(responseContent);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
