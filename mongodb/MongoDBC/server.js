const { MongoClient } = require('mongodb');

async function main() {
    const client = await MongoClient.connect('mongodb://localhost:27017/')
    const db = client.db('MyDb');
    const collection = db.collection('Persons')

    try {
        await collection.insertOne({ id: 1, firstName: 'Almina', lastname: 'Tanglao' })
        await collection.insertOne({ id: 2, firstName: 'Abby', lastname: 'Dizon' })
        await collection.insertOne({ id: 3, firstName: 'Gabrielle Mae Rose', lastname: 'Delos Santos' })
        const count = await collection.countDocuments();
        console.log('Total Rows: ' + count);
    } catch (error) {
        console.error(error);
    } finally {
        client.close();
    }
}

main();