import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/cart-icon.component";

import "./header.styles.scss";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectCarHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { signOutStart } from "../../redux/user/user.actions";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>

      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCarHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

//before applying css in js
//code was like this
// const Header = ({currentUser, hidden}) => (
//   <div className='header' >
//     <Link className='logo-container' to='/'>
//         <Logo className='logo' />
//     </Link>
//     <div className='options'>
//         <Link className='option' to='/shop'>SHOP</Link>
//         <Link className='option' to='/contact'>CONTACT</Link>

//         {
//             currentUser?
//             <div
//                 className='option'
//                 onClick={() => auth.signOut()}>SIGN OUT
//             </div>
//             :
//             <Link className='option' to='/signin'>SIGN IN</Link>
//         }

//         <CartIcon />

//     </div>
//     {
//       hidden ? null : <CartDropdown />
//     }
//   </div>
// );
