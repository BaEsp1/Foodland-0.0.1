import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate, useLocation } from "react-router-dom";
import { update_users } from "../../redux/actions/userActions";
import Loader from "../Loader/Loader";
import MessageBox from "../Error/messageBox";
import "./EditProfile.css"
import Swal from "sweetalert2";

const EditProfile = ({handlecancel}) => {

	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo, loading, error } = userSignin;

	const dispatch = useDispatch();


	const cancelUpdate = () =>{
		handlecancel();
	}

	const submitHandler = (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
		  Swal.fire({
			title: "Passwords don't match",
			icon: "warning",
			button: "ok"
		  });
		} else {
		  const editedUser = { password };
		  Swal.fire({
			title: 'Are you sure?',
			text: `Do you want to update the password?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes!',
			cancelButtonText: 'Cancel'
		  }).then((result) => {
			if (result.isConfirmed) {
			  dispatch(update_users(userInfo._id, userInfo.isAdmin, editedUser, userInfo.token));
			} else if (result.dismiss === Swal.DismissReason.cancel) {
				cancelUpdate();
			  Swal.fire({
				title: 'Cancelled',
				text: 'The password update was cancelled',
				icon: 'info',
				button: 'ok'
			  });
			}
		  });
		}
	  };


	if (userInfo.isAdmin){
		return(
			<div className="EditProfileContainer">
        <form className="formRegister1" onSubmit={submitHandler}>
				{loading && <Loader></Loader>}
				{error && <MessageBox variant="danger">{error}</MessageBox>}

				<div className="labelCreateUser">
					<label htmlFor="password" className="labelCreateUser">
						New password
					</label>
					<input
						type="password"
						id="password"
						placeholder="Enter password"
						onChange={(e) => setPassword(e.target.value)}
					></input>
				</div>
				<div className="labelCreateUser">
					<label htmlFor="confirmPassword" className="labelCreateUser">
						Confirm new password
					</label>
					<input
						type="password"
						id="confirmPassword"
						placeholder="Confirm password"
						onChange={(e) => setConfirmPassword(e.target.value)}
					></input>
				</div>
				<div>
					<label /> <button className="cancelbuton" type="submit" onClick={()=>cancelUpdate()}>
						Cancel
					</button>
					<button className="primary" type="submit">
						Update
					</button>
					<label />
				</div>
			</form>
    </div>
		)
	} else
return(
    <div className="EditProfileContainer">
        <form  onSubmit={submitHandler}>
				{loading && <Loader></Loader>}
				{error && <MessageBox variant="danger">{error}</MessageBox>}

				<div className="labelCreateUser">
					<label htmlFor="password" className="labelCreateUser">
						New password
					</label>
					<input
						type="password"
						id="password"
						placeholder="Enter password"
						onChange={(e) => setPassword(e.target.value)}
					></input>
				</div>
				<div className="labelCreateUser">
					<label htmlFor="confirmPassword" className="labelCreateUser">
						Confirm password
					</label>
					<input
						type="password"
						id="confirmPassword"
						placeholder="Confirm password"
						onChange={(e) => setConfirmPassword(e.target.value)}
					></input>
				</div>
				<div>
					<label />
					<button className="cancelbuton" type="submit" onClick={()=>cancelUpdate()}>
						Cancel
					</button>
					<button className="primary" type="submit">
						Update
					</button>
					<label />
				</div>
			</form>
    </div>
)
}

export default EditProfile