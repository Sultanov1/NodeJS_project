const express = require('express');
const app = express();
const port = 8080;
const Vigenere = require('caesar-salad').Vigenere;
const password = 'password'

app.get('/:message', (req, res) => {
    return res.send(req.params.message);
});

app.get('/encode/:text', (req, res) => {
   const encode = Vigenere.Cipher(password).crypt(req.params.text);
   res.send(encode);
});

app.get('/decode/:text', (req, res) => {
    const encode = Vigenere.Cipher(password).crypt(req.params.text);
    res.send(encode);
})

app.listen(port, () => {
    console.log(`Server listening at http://127.0.0.1:${port}`);
});