import React from 'react';
import Input from '@material-ui/core/Input';
import './search.css';

const SearchBox = ({ searchChange, name }) => {
	return (

		<Input className="searchBar"

			placeholder={name}
			onChange={searchChange}
			inputProps={{ 'aria-label': 'description' }} />
	);
};

export default SearchBox;