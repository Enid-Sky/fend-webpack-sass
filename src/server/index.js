projectData = {};

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express();

//initialize the main folder
app.use(express.static('dist'))

/*Middleware*/
//Configure express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(body - bodyParser.urlencoded({
    extended: false
}));

app.use(body - parser.json());

//cors for cross origin allowance
const cors = require('cors');
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

//get route
app.get('/test', function (req, res) {
    res.send(projectData)
})

//POST route

app.post('/add', addInfo);

function addInfo(req, res) {
    let data = req.body;
    newEntry = {
        temp: data.main.temp
    }

    Object.assign(projectData, newEntry);
    res.send(projectData)
}