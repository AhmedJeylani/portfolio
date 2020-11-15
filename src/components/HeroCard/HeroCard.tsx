import React from 'react';
import './hero-card.scss';
import { Link } from '@reach/router';
import Portrait from '../../resources/potrait/editted_less_egress_me.jpg';

function HeroCard() {
	return (
		<div>
			<div className="hero-card">
				<div>
					<p className="title">
						Hi, I’m Ahmed. A software developer based in London.{' '}
					</p>
					<p className="information">
						Started by working on Minecraft Mods to building multiple type of
						projects such as mobile apps, desktop apps and web apps.
					</p>
				</div>
				<Link to="/portfolio" className="button-link">
					Portfolio
				</Link>
				<img className="portrait" src={Portrait} />
			</div>
		</div>
	);
}

export default HeroCard;
