const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://snowball:digital@cemitdatabase-6nqjy.mongodb.net/test?retryWrites=true&w=majority'

let _db;

const Connector = {

    connectToDatabase: (callback) => {
        MongoClient.connect(url, { useUnifiedTopology: true }, 
            (err, client) => {
                if (err) throw err

                _db = client.db('CemitDatabase')
                console.log(`Connected to the database: ${_db.databaseName}`)
            })
    },

    getDatabase: () => {
        return _db
    },

    closeDatabase: () => {  
        _db.close()
    }
}

module.exports = Connector