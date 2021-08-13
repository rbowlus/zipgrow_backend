const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://sarho:rhoda123@cluster0.0qx5w.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri);


async function listAll() {
    try { 
        await client.connect();
        const database = client.db('zipGrow');
        const seeds = database.collection('seedLibrary');
        return await seeds.find().toArray()
    } finally {
        await client.close();
    }
}


async function search(searchParams) {
    try { 
        await client.connect();
        const database = client.db('zipGrow');
        const seeds = database.collection('seedLibrary');
        return await seeds.find(searchParams).toArray()
    } finally {
        await client.close();
    }
}


module.exports.listAll = listAll;
module.exports.search = search;