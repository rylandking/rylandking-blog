const AppReducer = (state, action) => {
	switch (action.type) {
		case 'OPEN_SUBSCRIBE_MODAL':
			return {
				...state,
				isSubscribeModalOpen: true,
				subscribeModalMethod: action.payload.subscribeModalMethod,
			};
		case 'CLOSE_SUBSCRIBE_MODAL':
			return {
				...state,
				isSubscribeModalOpen: false,
			};
		case 'OPEN_COMPANY_MODAL':
			return {
				...state,
				companyModal: action.payload.company,
			};
		case 'CLOSE_COMPANY_MODAL':
			return {
				...state,
				companyModal: null,
			};
		default:
			return state;
	}
};

export default AppReducer;
