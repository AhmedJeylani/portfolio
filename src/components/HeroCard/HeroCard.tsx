import React from 'react';
import './hero-card.scss';
import { Link } from '@reach/router';

function HeroCard() {
	return (
		<div>
			<div className="hero-card">
				<div className="text-container">
					<p className="title">
						Hi, I’m Ahmed. A software developer based in London.{' '}
					</p>
					<p className="information">
						Some random text about you and the experience you have. Some random
						text about you and the experience you have.
					</p>
				</div>
				<Link to="/portfolio" className="button-link">
					Portfolio
				</Link>
			</div>
		</div>
	);
}

export default HeroCard;
