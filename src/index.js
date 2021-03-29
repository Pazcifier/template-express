const express = require('express');
const app = express();

const port = 8080;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

app.get('/', (req, res) => {
    res.status(200).send('<h1>Hola Mundo!</h1>')
})