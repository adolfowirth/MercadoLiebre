const express = require('express');
const app = express();
const path = require('path');

const pathFolder = path.resolve(__dirname, './public');
app.use(express.static(pathFolder));

app.listen(3030, () => {
    console.log("Servidor corriendo en http://localhost:3030/")}
)

app.get('/', (req,res) => {
    let htmlPath = path.resolve(__dirname, './views/home.html');
    res.sendFile(htmlPath);
})

