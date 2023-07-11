import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { register } from "../../redux/actions/userActions";
import Loader from "../Loader/Loader";
//import MessageBox from "../Error/messageBox";
import Swal from "sweetalert2";
import legalPopup from "../../Texts/legalPopup.txt";
import "./registerScreen.css";

function RegisterScreen(props) {
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const { search } = useLocation();
	const redirectInUrl = new URLSearchParams(search).get("redirect");
	const redirect = redirectInUrl ? redirectInUrl : "/";

	const userRegister = useSelector((state) => state.userRegister);
	const { userInfo, loading, error } = userRegister;

	const dispatch = useDispatch();

	const submitHandler = (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords don't match");
		} else {
			dispatch(register(name, email, password));
		}
	};

	const showLegalInfo = () => {
		fetch(legalPopup)
			.then((response) => response.text())
			.then((data) => {
				Swal.fire({
					title: "Supermarket Purchase Agreement",
					text: data,
					confirmButtonText: "OK",
				});
			});
	};

	useEffect(() => {
		if (error) {
			Swal.fire(error);
		}
		if (userInfo) {
			navigate(redirect);
		}
	}, [userInfo, navigate, redirect, error]);

	return (
		<div className="formRegisterContainer">
			<form className="formRegister" onSubmit={submitHandler}>
				<div>
					<h1>Create an Account</h1>
				</div>

				{loading && <Loader></Loader>}
				{/* {error && <MessageBox variant="danger">{error}</MessageBox>} */}

				<div className="labelCreateUser">
					<label htmlFor="name" className="labelCreateUser">
						Name
					</label>
					<input
						type="text"
						id="name"
						placeholder="Enter name"
						required
						onChange={(e) => setName(e.target.value)}
					></input>
				</div>
				<div className="labelCreateUser">
					<label htmlFor="email" className="labelCreateUser">
						Email Address
					</label>
					<input
						type="email"
						id="email"
						placeholder="Enter email"
						required
						onChange={(e) => setEmail(e.target.value)}
					></input>
				</div>
				<div className="labelCreateUser">
					<label htmlFor="password" className="labelCreateUser">
						Password
					</label>
					<input
						type="password"
						id="password"
						placeholder="Enter password"
						required
						onChange={(e) => setPassword(e.target.value)}
					></input>
				</div>
				<div className="labelCreateUser">
					<label htmlFor="confirmPassword" className="labelCreateUser">
						Confirm Password
					</label>
					<input
						type="password"
						id="confirmPassword"
						placeholder="Confirm password"
						required
						onChange={(e) => setConfirmPassword(e.target.value)}
					></input>
				</div>
				<div>
					<label>
						<input
							type="checkbox"
							onClick={() => showLegalInfo()}
							required
						></input>
						accept the terms and conditions
					</label>
				</div>
				<div>
					<label />
					<button className="primary" type="submit">
						Register
					</button>
				</div>
				<div>
					<label />
					<div>
						Already have an account?{" "}
						<Link to={`/login?redirect=${redirect}`}>Sign In</Link>
					</div>
				</div>
			</form>
		</div>
	);
}

export default RegisterScreen;
