import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	const [full_name, setFull_name] = useState();
	const [email, setEmail] = useState();
	const [address, setAddress] = useState();
	const [phone, setPhone] = useState();

	function saveContact(x) {
		console.log(x);

		fetch("https://assets.breatheco.de/apis/fake/contact/", {
			method: "POST",
			body: JSON.stringify(x),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => resp.json())
			.then(data => {
				actions.updateContacts();
				console.log("saveContact", data);
			});
	}

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							value={full_name}
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={e => setFull_name(e.target.value)}
						/>
					</div>
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
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() =>
							saveContact({
								agenda_slug: "dlozano93",
								full_name: full_name,
								email: email,
								phone: phone,
								address: address
							})
						}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
