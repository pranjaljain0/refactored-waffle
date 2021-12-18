const { MongoClient } = require('mongodb');

const handler = async (req, res) => {
	const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.CLUSTURE}.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;

	const client = new MongoClient(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	console.log(process.env.NODE_ENV);

	client.connect((err) => {
		client
			.db('Waffles')
			.collection('AllWaffles')
			.find({})
			.toArray(function (err, result) {
				res.status(200).json({ result });
			});
	});

	client.close();
};

export default handler;
