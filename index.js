// lib //

const express = require('express');
const app = express();


const port = 9090

app.listen(port, () => {
    console.log('Listening on port ' + port);
});


app.get('/hasan', (req, res) => 
res.send('wo ghr py nhi hain'));



app.post('/hasanPOST', (req, res) =>{

    let name = req.body.name;
    res.send(name);

})

app.post('/hasanPOST', (req, res) =>{

    let name = req.body.name;
    res.send(name);

})
