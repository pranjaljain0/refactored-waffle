import { fetchTopWaffle } from '../../server/Queries';

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

	MongoClient.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
		.then((client) => {
			client
				.db('Waffles')
				.collection('AllWaffles')
				.aggregate(fetchTopWaffle())
				.toArray((err, results) => {
					err && res.status(400).json(err);
					res.status(200).json(results);
				});
		})
		.catch((error) => {
			res.status(500).json({ status: 'ERROR', err: error });
			console.log(error);
		});
};

export default handler;
