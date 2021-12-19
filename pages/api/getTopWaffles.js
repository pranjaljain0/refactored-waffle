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
	const client = new MongoClient(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	client.connect((err) => {
		client
			.db('Waffles')
			.collection('AllWaffles')
			.find({})
			.toArray(function (err, result) {
				res.status(200).json(result);
			});
	});
	// res.status(200).json(obj);

	client.close();
};

export default handler;
