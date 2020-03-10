import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditContact = props => {
	const { store, actions } = useContext(Context);

	let contact = store.contacts[props.match.params.index];

	console.log("CONTACT " + store.contacts[0]);
	console.log("STORE " + JSON.stringify(store.contacts[0]));

	const [full_name, setFull_name] = useState(contact.full_name);
	const [email, setEmail] = useState(contact.email);
	const [address, setAddress] = useState(contact.address);
	const [phone, setPhone] = useState(contact.phone);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit a contact</h1>
				<div className="row">
					<div className="col-sm">
						<h3>Full Name:</h3>
						<br />
						<h3>Email:</h3>
						<br />
						<h3>Phone:</h3>
						<br />
						<h3>Address:</h3>
					</div>
					<div className="col-md">
						<div>
							<div className="form-group">
								<label>Full Name</label>
								<input
									value={full_name}
									type="text"
									className="form-control"
									placeholder="Full Name"
									onChange={e => setFull_name(e.target.value)}
								/>

								<div className="form-group">
									<label>Email</label>
									<input
										value={email}
										type="email"
										className="form-control"
										placeholder="Enter email"
										onChange={e => setEmail(e.target.value)}
									/>
								</div>
								<div className="form-group">
									<label>Phone</label>
									<input
										value={phone}
										type="phone"
										className="form-control"
										placeholder="Enter phone"
										onChange={e => setPhone(e.target.value)}
									/>
								</div>
								<div className="form-group">
									<label>Address</label>
									<input
										value={address}
										type="text"
										className="form-control"
										placeholder="Enter address"
										onChange={e => setAddress(e.target.value)}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() =>
							actions.editContact(contact.id, {
								full_name: full_name,
								email: email,
								phone: phone,
								address: address
							})
						}>
						save
					</button>
					<Link className="text-center" to="/">
						or get back to contacts
					</Link>
				</div>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};
