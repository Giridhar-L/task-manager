const MongoClient = require('mongodb').MongoClient;

let _db = null;
module.exports['init'] = async function init(){
    let client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
    _db = client.db('test');
}

module.exports['get'] = function(){
    return _db;
}

module.exports['close'] = function(){
    
}
