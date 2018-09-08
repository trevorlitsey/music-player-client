import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';

class Nav extends Component {
	state = { activeItem: 'home' };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<Segment inverted style={{ borderRadius: 0 }}>
				<Menu inverted pointing secondary>
					<Menu.Item
						name="all songs"
						active={activeItem === 'messages'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						name="upload"
						active={activeItem === 'home'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						name="account"
						active={activeItem === 'friends'}
						onClick={this.handleItemClick}
					/>
				</Menu>
			</Segment>
		);
	}
}

export default Nav;
