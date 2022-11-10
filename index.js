const express = require("express")
const api_helper = require('./helper.js')

const app = express();
const port = 3000;
const symbolApiUrl = 'https://th6dwh.deta.dev/v1/symbol'

// to serve static content
app.use(express.static('public'));

// to hnadle urlencoded forms
app.use(express.urlencoded({ extended: true }));

// use EJS template engine
app.set('view engine', 'ejs');

// routes
app.post('/form', async (req, res) => {
    console.log(req.body);
    await api_helper.api_call_post(symbolApiUrl, req.body)
    res.redirect('/index')
})

app.get('/form', (req, res) => {
    res.render('form');
})

app.get('/index', async (req, res) => {
    await api_helper.api_call_get(symbolApiUrl)
        .then(response => {
            console.log(response["symbols"])
            res.render('index', {symbols: response["symbols"]});
        })
        .catch(error => {
            console.log("error on request v1/symbol: " + error)
            res.send(error)
        });
})

// not implemented
app.get('/graphs', (req, res) => {
    res.redirect("/index")    
})

module.exports = app; // required for deta cloud
app.listen(port, ()=> console.log("server listening on port :", port));