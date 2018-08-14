import React, { Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
		constructor() {
				super()
				this.state = {
				robots: [],
				seachfield: ''
			}
		}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users => this.setState({ robots: users }));
}

onSearchChange = (event) => {
	this.setState({seachfield: event.target.value})
	
}


onAdd = () => {
	let lastID = this.state.robots.slice(-1)[0].id;
	let newObj =  {
		id: lastID + 1,
		name: this.state.seachfield
	}
	this.state.robots.push(newObj);
	this.setState({seachfield: newObj.name})
}	


render() {
	const {robots, seachfield} = this.state
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(seachfield.toLocaleLowerCase());
		})
		
		if (robots.length === 0) {
			return <h1>Loading</h1>
		} else {
			return (
	<div className='tc'>
		<h1 className='f1'>RoboFriends</h1>
		<Searchbox searchChange = {this.onSearchChange}/>
        <button onClick ={this.onAdd}>Add</button>
		<Scroll><CardList robots={filteredRobots}/></Scroll>
	</div>
);
		}
}
}

export default App;