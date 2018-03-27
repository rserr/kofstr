const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 4000;

const router = require('./routes/routes.js');

app.use('/public', express.static('public/'));
// app.use('/controllers/', express.static('controllers/'));

app.use(router);

app.listen(PORT,function() {
    console.log(`Express listening on port ${PORT}`);
});
