import { useContext } from 'react';
import { LOCAL_STORAGE_HAS_SUBSCRIBED_KEY } from '../lib/constants';
import { GlobalContext } from '../context/GlobalState';
import localStorage from '../client/local-storage';

const EXIT_INTENT_THRESHOLD_DAYS = 0.1;
const EXIT_INTENT_THRESHOLD_MS =
	60 * 60 * 24 * EXIT_INTENT_THRESHOLD_DAYS * 1000;
const LOCAL_STORAGE_LAST_SHOW_EXIT_INTENT_KEY = 'lastShowExitIntent';

export default function ExitIntentDiv() {
	const { openSubscribeModal } = useContext(GlobalContext);

	const showModal = () => {
		localStorage.setItem(
			LOCAL_STORAGE_LAST_SHOW_EXIT_INTENT_KEY,
			new Date().valueOf()
		);
		openSubscribeModal();
	};

	const showIfAppropriate = () => {
		const hasSubscribed = localStorage.getItem(
			LOCAL_STORAGE_HAS_SUBSCRIBED_KEY
		);
		if (hasSubscribed) {
			console.log('skipping exit intent, already subscribed');
			return;
		}

		const now = new Date().valueOf();
		const lastShownAt = localStorage.getItem(
			LOCAL_STORAGE_LAST_SHOW_EXIT_INTENT_KEY
		);
		if (!lastShownAt) {
			console.log('showing exit intent - never shown before');
			return showModal();
		}
		if (lastShownAt + EXIT_INTENT_THRESHOLD_MS < now) {
			console.log(
				'showing exit intent - been more than',
				EXIT_INTENT_THRESHOLD_DAYS,
				'days'
			);
			return showModal();
		}
		console.log('skipping exit intent - too soon');
	};

	return (
		<div
			className='w-full fixed top-0 mt-1 p-1 bg-transparent z-20'
			onMouseEnter={showIfAppropriate}
		/>
	);
}
