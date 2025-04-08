//conexão com o banco de dados
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/task';
mongoose.connect(url, {useNewUrlParser: true});

module.exports = mongoose;