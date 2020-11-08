import React, { Component, useState } from 'react';
import './nav-bar.scss';
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
					<p className="heading"> Logo </p>
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
						<button onClick={showBuggerMenu}>=</button>
						{open && (
							<ul className="burger-items">
								{NavItems.map((item, index) => {
									return (
										<li key={index}>
											<Link to={item.url}>{item.title}</Link>
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
