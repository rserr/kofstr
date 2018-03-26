const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT,function() {
    console.log(`Express listening on port ${PORT}`);
});
