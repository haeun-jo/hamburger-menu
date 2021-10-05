import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Hamburger from './Hamburger';

function Header({ history }) {

  // State for menu button
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  // State for disabled button
  const [disabled, setDisabled] = useState(false);

  // Use effect for page changes
  useEffect(() => {
    // listen for page changes
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  });

  const handleMenu = () => {
    disabledMenu();
    if(state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
      //console.log(1);
    } else if(state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
      //console.log(2);
    } else if(state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
      //console.log(3);
    }
  };

   // Determine if our menu button should be disabled
   const disabledMenu = () => {
     setDisabled(!disabled);
     setTimeout(() => {
       setDisabled(false);
     }, 1200);
   };

  return(
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">HAMBURGER</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
}

export default withRouter(Header);