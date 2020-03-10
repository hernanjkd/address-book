const getState = ({ getStore, getActions, setStore }) => {
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
			},
			deleteContacts: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE"
				}).then(() => {
					getActions().updateContacts();
				});
			},
			editContacts: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "PUT",
					body: JSON.stringify(),
					headers: {
						"Content-Type": "application/json"
					}
				}).then(() => {
					getActions().updateContacts();
				});
			}

			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
