const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			updateContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/dlozano93")
					.then(resp => resp.json())
					.then(data => {
						setStore({ contacts: data });
					});
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
