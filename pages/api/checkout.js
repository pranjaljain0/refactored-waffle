const { MongoClient, ObjectID } = require('mongodb');

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		res.status(400).send({ message: 'Only POST requests allowed' });
		return;
	}
	const body = req.body;
	if (!process.env.USERNAME)
		throw new Error('Missing environment variable USERNAME');
	if (!process.env.PASSWORD)
		throw new Error('Missing environment variable PASSWORD');
	if (!process.env.CLUSTURE)
		throw new Error('Missing environment variable CLUSTURE');
	if (!process.env.DATABASE)
		throw new Error('Missing environment variable DATABASE');

	const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.CLUSTURE}.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;
	const client = new MongoClient(uri);
	let hexID = null;
	try {
		await client.connect();
		const database = client.db('Waffles');
		const collection = database.collection('Orders');
		const result = await collection.insertOne(body).then((e) => {
			hexID = e.insertedId.toHexString();
		});
	} catch (err) {
		res.redirect('/404');
		console.log(err);
	} finally {
		await client.close();
	}
}
