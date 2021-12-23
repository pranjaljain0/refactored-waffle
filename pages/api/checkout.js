// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	if (req.method !== 'POST') {
		res.status(400).send({ message: 'Only POST requests allowed' });
		return;
	}
	const body = JSON.parse(req.body);
	console.log(`❗ checkout.js:9 'body'`, body);
}
