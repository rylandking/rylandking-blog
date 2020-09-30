import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial jobs state
const initialState = {
	isSubscribeModalOpen: false,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	function openSubscribeModal(method) {
		dispatch({
			type: 'OPEN_SUBSCRIBE_MODAL',
			payload: { subscribeModalMethod: method },
		});
	}

	function openCompanyModal(company) {
		dispatch({
			type: 'OPEN_COMPANY_MODAL',
			payload: { company },
		});
	}

	function closeCompanyModal() {
		dispatch({
			type: 'CLOSE_COMPANY_MODAL',
		});
	}

	function closeSubcribeModal() {
		dispatch({
			type: 'CLOSE_SUBSCRIBE_MODAL',
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				subscribeModalMethod: state.subscribeModalMethod,
				isSubscribeModalOpen: state.isSubscribeModalOpen,
				openSubscribeModal,
				closeSubcribeModal,
				openCompanyModal,
				closeCompanyModal,
				companyModal: state.companyModal,
			}}>
			{children}
		</GlobalContext.Provider>
	); // Actions (like interactvity shit)
};
