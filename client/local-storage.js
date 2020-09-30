/* globals localStorage */

const storageBackup = {};

const _localStorage = {
	setItem: (key, val) => {
		try {
			localStorage.setItem(key, val);
		} catch (e) {
			console.error('Error with localStorage setItem', e);
			storageBackup[key] = val;
		}
		return val;
	},
	getItem: (key) => {
		try {
			return localStorage.getItem(key);
		} catch (e) {
			console.error('Error with localStorage getItem', e);
			return storageBackup[key];
		}
	},
};

export default _localStorage;
