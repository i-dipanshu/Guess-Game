const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const staticPath = __dirname;
app.use(express.static(staticPath));

app.get('/', (req, res)=>{
    res.send();
})

app.listen(port, ()=>{
    console.log(`The server is running at localhost:${port}`);
})