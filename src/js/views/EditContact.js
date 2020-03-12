import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditContact = props => {
	const { store, actions } = useContext(Context);

	let contact = store.contacts[props.match.params.index];

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
						<h3>Full Name: {contact.full_name}</h3>
						<br />
						<h3>Email: {contact.email}</h3>
						<br />
						<h3>Phone: {contact.phone}</h3>
						<br />
						<h3>Address: {contact.address} </h3>
					</div>
					<div className="col-md">
						<div>
							<div className="form-group">
								<label>Full Name</label>
								<input
									type="text"
									className="form-control"
									placeholder={contact.full_name}
									onChange={e => setFull_name(e.target.value)}
								/>

								<div className="form-group">
									<label>Email</label>
									<input
										type="email"
										className="form-control"
										placeholder={contact.email}
										onChange={e => setEmail(e.target.value)}
									/>
								</div>
								<div className="form-group">
									<label>Phone</label>
									<input
										type="phone"
										className="form-control"
										placeholder={contact.phone}
										onChange={e => setPhone(e.target.value)}
									/>
								</div>
								<div className="form-group">
									<label>Address</label>
									<input
										type="text"
										className="form-control"
										placeholder={contact.address}
										onChange={e => setAddress(e.target.value)}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Link className="text-center" to="/">
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() =>
							actions.editContacts(contact.id, {
								agenda_slug: "dlozano93",
								full_name: full_name,
								email: email,
								phone: phone,
								address: address
							})
						}>
						save
					</button>
				</Link>
				<div className="row justify-content-center">
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
