import { createSubscriber } from '../../lib/octopus';

export default async function subscriber(req, res) {
	const { method } = req;

	switch (method) {
		case 'POST':
			try {
				const { email } = req.body;
				const resp = await createSubscriber({ email });
				if (resp.error) {
					res.status(400);
					res.json({ error: resp.error });
					return;
				} else {
					res.json({ message: resp.message });
				}
			} catch (e) {
				res.statusCode = 500;
				console.error('Request error', e.response.body);
				res.json({ error: 'Error saving email address' });
			}
			break;
		default:
			res.setHeader('Allow', ['POST']);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}
