import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';

class Nav extends Component {
	state = { activeItem: 'home' };

	handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name });
	};

	render() {
		const { activeItem } = this.state;

		return (
			<Segment inverted style={{ borderRadius: 0 }}>
				<Menu inverted pointing secondary>
					<Menu.Item
						as={Link}
						to="/"
						name="all songs"
						active={activeItem === 'all songs'}
						onClick={this.handleItemClick}
						link
					/>
					<Menu.Item
						as={Link}
						to="/upload"
						name="upload"
						active={activeItem === 'upload'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						as={Link}
						to="/account"
						name="account"
						active={activeItem === 'account'}
						onClick={this.handleItemClick}
					/>
					<Menu.Menu position="right">
						<Menu.Item
							as={Link}
							to="/login"
							name="login"
							active={activeItem === 'signup'}
							onClick={this.handleItemClick}
						>
							Log In
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			</Segment>
		);
	}
}

export default Nav;
