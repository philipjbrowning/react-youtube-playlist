import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		
		this.state = { term: '' };
	}
	
	render() {
		return (
			<div>
				<p>
					<input
						value={this.state.term}
						onChange={(event) => this.setState({ term: event.target.value})} />
				</p>
				<p>Value of the input: {this.state.term}</p>
			</div>
		);
	}
}

export default SearchBar;