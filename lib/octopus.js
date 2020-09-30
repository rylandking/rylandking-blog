import axios from 'axios';

const client = axios.create({
	baseURL: 'https://emailoctopus.com/api/1.5',
});

// client({url: '/lists/${list_id}/contacts', method: 'post', data: {email_address: 'dylanjhaveri@gmail.com', api_key: '${api_key}'}})

export const createSubscriber = async ({ email }) => {
	try {
		await client({
			url: `/lists/${process.env.EMAIL_OCTOPUS_LIST_ID}/contacts`,
			method: 'post',
			data: {
				email_address: email,
				api_key: process.env.EMAIL_OCTOPUS_API_KEY,
			},
		});
		return { message: 'ok' };
	} catch (e) {
		if (
			e.response.data &&
			e.response.data.error &&
			e.response.data.error.code === 'MEMBER_EXISTS_WITH_EMAIL_ADDRESS'
		) {
			return { message: 'ok' };
		}
		if (e.response.data && e.response.data.code === 'INVALID_PARAMETERS') {
			return { message: "Email doesn't look right" };
		}
		console.error('Error saving email', e.response.data);
		return { error: 'Error saving email' };
	}
};

export default client;
