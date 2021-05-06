import React from "react";

import { connect } from "react-redux";

import {createStructuredSelector} from 'reselect'

import CartIcon from "../cart-icon/CartIcon";

import { Link } from "react-router-dom";


import { auth } from "../../firebase/firebase.utils";

import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {selectCartHidden} from  '../../redux/cart/cart.selectors'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './Header.style'

function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
      side shop co.
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/">
          CONTACT
        </OptionLink>

        {currentUser ? (
          <OptionLink as='div' onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT{" "}
          </OptionLink >
        ) : (
          <OptionLink to="/signin">
            {" "}
            SIGN IN{" "}
          </OptionLink>
        )}

        <CartIcon />
      </OptionsContainer>

      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
