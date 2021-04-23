import React from "react";

import { connect } from "react-redux";

import {createStructuredSelector} from 'reselect'

import CartIcon from "../cart-icon/CartIcon";

import { Link } from "react-router-dom";
import "./header.styles.scss";

import { auth } from "../../firebase/firebase.utils";

import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import {selectCurrentUser} from '../../redux/user/user.slectors'
import {selectCartHidden} from  '../../redux/cart/cart.selectors'

function Header({ currentUser, hidden }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        Logo
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT{" "}
          </div>
        ) : (
          <Link className="option" to="/signin">
            {" "}
            SIGN IN{" "}
          </Link>
        )}

        <CartIcon />
      </div>

      {hidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
