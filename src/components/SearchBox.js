import React from 'react';


const SearchBox = ({ searchfield, searchChange }) => {
	return (
			<div className='pd2' >
			<input className = 'pd3 ba b--green bg-lightest-blue' 
			type='Search' 
			placeholder='Search Robots'
			onChange={searchChange}
			/>
			</div>
		);
}

export default SearchBox;