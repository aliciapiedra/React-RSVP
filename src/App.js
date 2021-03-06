import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/MainContent/Main';
import guestList from './data/guestData';
import './App.css';

class App extends Component {
	state = {
		guests: guestList,
		isFiltered: false,
		guestName: String(),
	}

	handleNewGuestName = e => {
		this.setState({ guestName: e.target.value})
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

	addGuest = e => {
		e.preventDefault()
		const { guests, guestName } = this.state 
		guests.push({name: guestName, id: guests.length, isConfirmed: false, isEditing: false})
		this.setState({ guests })
	}

	removeGuest = id => {
		let { guests } = this.state
		guests = guests.filter(guest => guest.id !== id)
		this.setState({ guests })
	}



	render() {
		const { guests, isFiltered, guestName } = this.state
		const totalInvited = guests.length
		const numberAttending = guests.reduce((total, guest) => guest.isConfirmed ? total + 1 : total, 0) 
		const numberUnconfirmed = totalInvited - numberAttending
		const guestList = guests.reduce((acc, guest) => {
			if (!isFiltered || guest.isConfirmed) acc.push(guest)
			return acc
		}, [])
		return (
			<div className="App">
				<Header guestName={guestName} 
				addGuest={this.addGuest} 
				handleNewGuestName={this.handleNewGuestName}/>
				<Main
					totalInvited={totalInvited}
					numberAttending={numberAttending}
					numberUnconfirmed={numberUnconfirmed}
					guestName={ guestName }
					toggleGuestProperty={this.toggleGuestProperty}
					toggleFilter={this.toggleFilter}
					isFiltered={isFiltered}
					guests={guests}
					guestList={guestList} 
					handleChangeName={this.handleChangeName} 
					removeGuest={this.removeGuest} />
			</div>
		)
	}
}

export default App;
