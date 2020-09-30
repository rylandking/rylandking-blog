/* globals fetch */
import { v4 as uuid } from 'uuid';
import localStorage from './local-storage';
import { LOCAL_STORAGE_HAS_SUBSCRIBED_KEY } from '../lib/constants';

const getDeviceId = () => {
	let deviceId = localStorage.getItem('device-id');
	if (deviceId) {
		return deviceId;
	}
	deviceId = uuid();
	localStorage.setItem('device-id', deviceId);
	return deviceId;
};

const apiRequest = async (path, options) => {
	const resp = await fetch(path, options);
	if (resp.ok) {
		return resp.json();
	} else {
		console.error('Error with request', path, options, resp);
		throw new Error(
			`Error response in request ${resp.status} ${resp.statusText}`
		);
	}
};

export const createSubscriber = async ({ email, method }) => {
	return apiRequest('/api/subscribers', {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify({ email }),
	}).then(() => {
		localStorage.setItem(LOCAL_STORAGE_HAS_SUBSCRIBED_KEY, true);
	});
};
