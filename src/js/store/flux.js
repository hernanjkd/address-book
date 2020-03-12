import PropTypes from "prop-types";

const getState = ({ getStore, getActions, setStore, props }) => {
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
			editContacts: (a, b) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + a, {
					method: "PUT",
					body: JSON.stringify(b),
					headers: {
						"Content-Type": "application/json"
					}
				}).then(() => {
					getActions().updateContacts();
				});
			},
			deleteAll: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/dlozano93", {
					method: "DELETE"
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

getState.propTypes = {
	history: PropTypes.object
};
