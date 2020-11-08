import React from 'react';
import { RouteComponentProps } from '@reach/router';

function NotFound(props: RouteComponentProps) {
	return (
		<div>
			<div className="container">
				<header>
					<p>Not Found</p>
				</header>
			</div>
		</div>
	);
}

export default NotFound;
