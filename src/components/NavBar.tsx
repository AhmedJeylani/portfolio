import React, { Component } from 'react';
import './NavBar.css';
import NavItems from './NavItems';

export default class NavBar extends Component {
	render() {
		return (
			<div className="nav">
				<p className="heading"> Hi Again </p>
				<ul className="nav-items">
					{NavItems.map((item, index) => {
						return (
							<li key={index}>
								<a className={item.title} href={item.url}>
									{item.title}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
