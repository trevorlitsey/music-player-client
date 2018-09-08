import React from 'react';
import { Container } from 'semantic-ui-react';

import Nav from './Nav';

const Layout = ({ children }) => (
	<div>
		<Nav />
		<Container style={{ margin: 20, padding: 20 }}>{children}</Container>
	</div>
);

export default Layout;
