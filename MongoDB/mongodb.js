const { MongoClient, ServerApiVersion } = require('mongodb');
const pw = process.env.MONGO_PW
const un = process.env.MONGO_UN
const host = process.env.MONGO_HOST

//&w=majority
const uri = `mongodb+srv://${un}:${pw}@${host}/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect()
const DB_NAME = "SampleDB"

exports.db = client.db(DB_NAME)

