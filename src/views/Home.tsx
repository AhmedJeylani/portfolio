import React from 'react';
import { RouteComponentProps } from '@reach/router';
import '../styles/home-view.scss';
import HeroCard from '../components/HeroCard/HeroCard';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import ProjectItems from '../components/ProjectCard/ProjectItems';

// interface IHomeProps extends RouteComponentProps {} -> when you pass in more than one prop

function Home(props: RouteComponentProps) {
	return (
		<div>
			<div className="container">
				<HeroCard />
				<p className="projects-title">Check out my latest project</p>
				<div className="projects-wrapper">
					{ProjectItems.map((item, index) => {
						return (
							<ProjectCard
								title={item.title}
								description={item.description}
								imgSrcList={item.imgSrcList}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Home;
