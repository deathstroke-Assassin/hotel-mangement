const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const webRouter = require('./route/web');
app.use(webRouter);

const port = process.env.PORT;
app.listen(port, () => {
    console.log('server start at port ' + port);
});