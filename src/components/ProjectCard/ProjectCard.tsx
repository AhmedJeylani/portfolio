import React from 'react';
import './project-card.scss';
import '../../styles/transitions.scss';
import { CSSTransition } from 'react-transition-group';

interface IProjectProps {
	title: string;
	description: string;
	imgSrcList: string[];
}

function ProjectCard(props: IProjectProps) {
	const [isHovered, setIsHovered] = React.useState(false);
	// tslint:disable-next-line:no-console
	console.log(isHovered);
	// tslint:disable-next-line:no-console
	console.log('----FIRST');
	function handleMouseEnter() {
		setIsHovered(!isHovered);
		// tslint:disable-next-line:no-console
		console.log(isHovered);
		// tslint:disable-next-line:no-console
		console.log('----ENTER');
	}

	function handleMouseLeave() {
		setIsHovered(!isHovered);
		// tslint:disable-next-line:no-console
		console.log(isHovered);
		// tslint:disable-next-line:no-console
		console.log('----LEAVE');
	}

	return (
		<div
			className="project-card"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
			<div>
				{props.imgSrcList.map((src, index) => {
					return <img src={src} />;
				})}
			</div>
			<CSSTransition in={isHovered} classNames="fade" timeout={600}>
				<div className="explore-hover fade-enter">
					<button className="button-link">Explore</button>
				</div>
			</CSSTransition>
		</div>
	);
}

export default ProjectCard;
