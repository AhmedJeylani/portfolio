import React, { Component, useState } from 'react';
import './nav-bar.scss';
import Logo from '../../resources/logo.svg';
import whiteMenu from '../../resources/white-menu.svg';
import NavItems from './NavItems';
import { Link } from '@reach/router';

function NavBar() {
	const [open, setOpen] = useState(false);
	function showBuggerMenu() {
		setOpen(!open);
	}

	return (
		<div className="nav">
			<div className="container">
				<div className="nav-container">
					<img src={Logo} />
					<ul className="nav-items">
						{NavItems.map((item, index) => {
							return (
								<li key={index}>
									<Link
										className={
											item.title.toLocaleLowerCase().includes('contact')
												? 'button-link'
												: 'nav-link'
										}
										to={item.url}
									>
										{item.title}
									</Link>
								</li>
							);
						})}
					</ul>
					<div className="burger-menu">
						<button className="burger-button" onClick={showBuggerMenu}>
							<img src={whiteMenu} />
						</button>
						{open && (
							<ul className="burger-items">
								{NavItems.map((item, index) => {
									return (
										<li key={index}>
											<Link className="links" to={item.url}>
												{item.title}
											</Link>
										</li>
									);
								})}
							</ul>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
