const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: [0]
		},
		actions: {
			saveInitialFetch: data => {
				setStore({ contacts: data });
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
