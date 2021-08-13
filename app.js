// creates an express application
const express = require('express');
const app = express()

const cors = require('cors');
const bodyParser = require('body-parser')

const port = process.env.PORT || 3001;

const search = require('./src/routes/api/search')

// enable Cross-Origin Resource Sharing
app.use(cors());

app.get('/backend', (req, res) => {
    res.send({'message': 'this works'})
})

app.get('/api/listall', async (req, res) => {
    res.send(await search.listAll());
})

app.get('/api/search', async (req, res) => {
    let searchParams = {};

    //Create additional search parameters based on the request
    let name = req.query.name;
    if (name)
        searchParams["Name"] = name;
    
    res.send(await search.search(searchParams));
})

// app.get('/api/plant-names', async (req, res) => {
//     res.send(await search.)
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;