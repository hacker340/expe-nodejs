const express = require('express');
const cors = require('cors')
var bodyParser = require('body-parser');

const router = require('./routes/route');
const UserModel = require('./models/user');
const database = require('./utils/database');



const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors())
app.use(router);














app.listen(3000, () => {
    console.log("server started");
});




