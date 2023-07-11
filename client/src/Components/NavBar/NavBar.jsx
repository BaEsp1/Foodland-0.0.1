import SearchBar from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { signIn, signout } from "../../redux/actions/userActions";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../Imgs/LogosSVG/logo-no-background.png";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Car from "../../Imgs/Icons/carrito.png";
import User from "../../Imgs/Icons/People-removebg-preview.png";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { logout, user, isAuthenticated } = useAuth0();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const cart = useSelector(({ cart: { cart: cartState } }) => cartState);
  const logoSvg = logo;
  const iconCar= Car;
  const iconUser = User;

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(signIn(user));
    }
  }, [isAuthenticated, dispatch, user]);

  const signOutHandler = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      logout();
      dispatch(signout());
    } else {
      dispatch(signout());
    }
    navigate("/");
  };

  const isAdmin = userInfo?.isAdmin;

  return (
    <div name="ContainerNav" key="ContainerNav" className="ContainerNav">
      <Link to="/" className="LinkLogo">
        <img src={logoSvg} alt="LogoFoodLand" className="LogoFoodLand" />
      </Link>
      <SearchBar />
      <div id="header" className="headerNavList">
        <ul className="nav">
          {!userInfo?.isAdmin && (
            <li>
              <img
                src={iconCar}
                alt="iconsWidget"
                className="iconsNav1"
              />
              <ul className="ulNav">
                <li>
                  <Link to="/MyCart">
                    <span>
                      <div className="viewCartNav">
                        {!cart
                          ? "Add products"
                          : cart.map((item) => (
                              <div key={item.id} className="background">
                                <img src={item.image} alt={item.name} />
                                <span className="span1">{item.name}</span>
                                <span className="span2">x{item.quantity}</span>
                              </div>
                            ))}
                      </div>
                    </span>
					</Link>
					</li>
            <li>
              <Link to="/MyCart">
                <span>
                  <p> View my cart</p>
                </span>
              </Link>
            </li>
          </ul>
        </li>
      )}
	  {isAdmin && (
              <Link className="btnHomeAdmin" to="/H0me">
                  <p>Home</p>
              </Link>
          )}
      <li>
        <img
          src={iconUser}
          alt="iconsLogin"
          className="iconsNav2"
        />
        {userInfo && <span className="userName">{userInfo.name}</span>}
        <ul className="ulNav">
          {userInfo ? (
            userInfo?.isAdmin ? (
              <div>
                <li>
                  <Link to="/profile">
                    <span>
                      <p>My Profile</p>
                    </span>
                  </Link>
                </li>
                <li>
                  <span>
                    <p onClick={signOutHandler}>Log out</p>
                  </span>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <Link to="/profile">
                    <span>
                      <p>My Profile</p>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/MyOrders">
                    <span>
                      <p>Shop history</p>
                    </span>
                  </Link>
                </li>
                <li>
                  <span>
                    <p onClick={signOutHandler}>Log out</p>
                  </span>
                </li>
              </div>
            )
          ) : (
            <li>
              <Link to="/login">
                <span>
                  <p>Log In</p>
                </span>
              </Link>
            </li>
          )}
        </ul>
      </li>
    </ul>
  </div>
</div>
);
};

export default NavBar;