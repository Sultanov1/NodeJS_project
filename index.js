const express = require('express');
const app = express();
const port = 8080;

app.get('/:message', (req, res) => {
    return res.send(req.params.message);
});

app.listen(port, () => {
    console.log(`Server listening at http://127.0.0.1:${port}`);
});