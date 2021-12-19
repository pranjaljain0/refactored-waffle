const { MongoClient } = require('mongodb');

const handler = async (req, res) => {
	if (!process.env.USERNAME)
		throw new Error('Missing environment variable USERNAME');
	if (!process.env.PASSWORD)
		throw new Error('Missing environment variable PASSWORD');
	if (!process.env.CLUSTURE)
		throw new Error('Missing environment variable CLUSTURE');
	if (!process.env.DATABASE)
		throw new Error('Missing environment variable DATABASE');

	const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.CLUSTURE}.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;

	let promise = MongoClient.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	promise
		.then((client) => {
			let db = client.db('Waffles');
			db.collection('AllWaffles')
				.find({})
				.toArray((err, results) => {
					res.status(200).json(results);
				});
		})
		.catch((error) => {
			res.status(500).json({ status: 'ERROR' });
			console.log(error);
		});
};

export default handler;
