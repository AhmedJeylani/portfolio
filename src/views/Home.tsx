import React from 'react';
import { RouteComponentProps } from '@reach/router';
import HeroCard from '../components/HeroCard/HeroCard';

// interface IHomeProps extends RouteComponentProps {} -> when you pass in more than one prop

function Home(props: RouteComponentProps) {
	return (
		<div>
			<div className="container">
				<HeroCard />
			</div>
		</div>
	);
}

export default Home;
