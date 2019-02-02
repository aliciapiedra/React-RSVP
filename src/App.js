import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/MainContent/Main';
import guestList from './data/guestData';
import './App.css';

class App extends Component {
	state = {
		guests: guestList,
		isFiltered: false,
	}

	handleChangeName = (name, id) => {
		let { guests } = this.state
		guests = guests.map(guest => id === guest.id ? {... guest, name} : guest)
		this.setState ({ guests })
	}

	toggleFilter = _ => this.setState({ isFiltered: !this.state.isFiltered })

	toggleGuestProperty = (prop, index) => e => {
		let { guests } = this.state
		guests = guests.map(guest => guest.id === index ? { ...guest, [prop]: !guest[prop] } : guest)
		this.setState({ guests })
	}

	addGuest = name => {
		const { guests } = this.state 
		guests.push({name: name, id: guests.length, isConfirmed: false, isEditing: false})
		this.setState({ guests })
	}

	render() {
		const { guests, isFiltered } = this.state
		const guestList = guests.reduce((acc, guest) => {
			if (!isFiltered || guest.isConfirmed) acc.push(guest)
			return acc
		}, [])
		return (
			<div className="App">
				<Header />
				<Main
					toggleGuestProperty={this.toggleGuestProperty}
					toggleFilter={this.toggleFilter}
					isFiltered={isFiltered}
					guests={guests}
					guestList={guestList} 
					handleChangeName={this.handleChangeName}/>
			</div>
		)
	}
}

export default App;
