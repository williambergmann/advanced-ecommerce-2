import React from "react";

function SubHeader() {
  return (
    <div className="sub-header">
        <div className="logo">
            <a href="index.html"><img src="images/logo.png" title="logo" /></a>
        </div>
        <div className="sub-header-right">
            <ul>
                <li><a href="#">log in</a></li>
                <li><a href="#">Your account</a></li>
                <li><a href="#">CART: (EMPTY) <img src="images/cart.png" title="cart" /></a></li>
            </ul>
            <input type="text" /><input type="submit"  value="search" />
        </div>
        <div className="clear"> </div>
    </div>
    );
}

export default SubHeader;
