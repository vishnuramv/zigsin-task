import React from 'react'
import M from 'materialize-css';  
import { useEffect } from 'react';
import '../styles/header.css';
import Button from './Button'
const Header = () => {
	useEffect(() => {
        let elems = document.querySelectorAll('.dropdown-trigger');
        let navelems = document.querySelectorAll('.sidenav');
        M.Dropdown.init(elems, {inDuration: 300, outDuration: 225, hover: true, coverTrigger: false});
        M.Sidenav.init(navelems);
    });
	return (
		<nav className="header">
			<div class="nav-wrapper">
				<ul id="nav-mobile" class="left hide-on-med-and-down">
					<li><a className="dropdown-trigger header__link" href="#!" data-target="dropdown1"><b>Products</b><i class="material-icons right">arrow_drop_down</i></a></li>
					<li><a className="header__link" href="/">Collections</a></li>
					<li><a href="/" className="header__link">Gifts</a></li>
					<li><a href="/" className="header__link">Our magazine</a></li>
				</ul>
				<ul id="nav-mobile" class="right hide-on-med-and-down">
					<li><a href="/" className="header__link"><i class="material-icons">search</i></a></li>
					<li><a href="/" className="header__link">Log In</a></li>
					<li><Button url="/" variant="colored" text="SIGN UP" /></li>
				</ul>
			</div>
			<ul id="dropdown1" class="dropdown-content">
				<li><a href="#!">one</a></li>
				<li><a href="#!">two</a></li>
				<li class="divider"></li>
				<li><a href="#!">three</a></li>
			</ul>
	    </nav>
	)
}

export default Header