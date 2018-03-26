const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/homepage.html');
    //res.send('Hello');
});

app.listen(PORT,function() {
    console.log(`Express listening on port ${PORT}`);
});
