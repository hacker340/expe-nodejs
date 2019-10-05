const mongoose = require('mongoose');



mongoose.connect(
    'mongodb+srv://srikanth:crawlink1234@cluster0-43vms.mongodb.net/testing?retryWrites=true&w=majority',
    // 'mongodb://localhost:27017/expences',
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);