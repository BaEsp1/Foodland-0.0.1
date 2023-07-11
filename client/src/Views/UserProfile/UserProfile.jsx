import React, { useState } from 'react';
import "./UserProfile.css"
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { signout } from "../../redux/actions/userActions";
import Swal from 'sweetalert2'
import EditProfile from '../../Components/EditProfile/EditProfile';
import Banner from "../../Imgs/Banner2.jpg"
import useLocalStore from '../../hooks/useLocalStore';
const Paypal = "https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png"

function Profile() {

  const [isEditing, setIsEditing] = useState(false);

  const [edit, setEdit] = useState(false);
  const [shippingAddress, setShippingAddress] = useLocalStore("Shipping", []);
  const [shippInfo, setShippInfo] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setShippingAddress(shippInfo);
    Swal.fire({
      icon: "success",
      text: "Success changes",
      confirmButtonText: 'OK'
    }).then(() => {
      window.location.reload();
    });
  };

  const handlecancel = (value) =>{
    setIsEditing(value)
  }

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOutHandler = () => {
    dispatch(signout());
    navigate("/");
  };

  return (
    <div className='userProfile'>
      <img src={Banner} alt="Banner" className="Banner1" />
      <h1 className='Hi'>Hi, {userInfo?.name}! I'm glad to meet you ♥</h1>
      {!userInfo.isAdmin && (
        <Link to="/">
          <button className="btnHome">BACK TO HOME</button>
        </Link>
      )}
      <div className='profileCard'>

        <div className='left'>
          <h1><span>Name: </span>{userInfo?.name} </h1>
          <h3><span>Email: </span>{userInfo.email}</h3>
          <label><input disabled value={userInfo._id}></input></label><br/>
          {!isEditing ? (
            <button className="butonEdit" onClick={handleEditProfile}>Change Password</button>
          ) : (
            <>
              <EditProfile handlecancel={handlecancel}/>
            </>
          )}
          <div className='left-btns'>
            <button onClick={signOutHandler} className='singOut-btn'> Sign out</button>
          </div>
        </div>
        <div className='right'>
          <h3>Here you can find your personal information.</h3>
          <h2>Shipping Address:</h2>
          {!edit ? (
            <div className='ContainerShipping'>
              <label>Address: <input value={shippingAddress.address} disabled></input></label>
              <label>City: <input value={shippingAddress.city} disabled></input></label>
              <label>Postal Code: <input value={shippingAddress.postalCode} disabled></input></label>
              <label>Country: <input value={shippingAddress.country} disabled></input></label><br></br>
              <button onClick={() => setEdit(true)}>Edit Shipping Information</button>
            </div>
          ) : (
            <div className='ContainerShipping'>

                <label>
                  Address:
                  <input
                    type="text"
                    value={shippInfo.address}
                    onChange={(event) =>
                      setShippInfo({ ...shippInfo, address: event.target.value })
                    }
                  ></input>
                </label>
                <label>
                  City:
                  <input
                    type="text"
                    value={shippInfo.city}
                    onChange={(event) =>
                      setShippInfo({ ...shippInfo, city: event.target.value })
                    }
                  ></input>
                  </label>
                  <label>
                  PostalCode:
                  <input
                    type="text"
                    value={shippInfo.postalCode}
                    onChange={(event) =>
                      setShippInfo({ ...shippInfo, postalCode: event.target.value })
                    }
                  ></input>
                </label>
                <label>
                  Country:
                  <input
                    type="text"
                    value={shippInfo.country}
                    onChange={(event) =>
                      setShippInfo({ ...shippInfo, country: event.target.value })
                    }
                  ></input>
                </label>
                  <br></br>
                <button onClick={()=>handleSave()}>Saved Information </button>
                </div>
              )}

              <hr></hr>
          <h2>Payment method:</h2>
          <img src={Paypal} alt="Paypal" className='PaypalLogo'></img>

        </div>
      </div>
      <img src={Banner} alt="Banner" className="Banner1"/>
    </div>
  );
}

export default Profile;