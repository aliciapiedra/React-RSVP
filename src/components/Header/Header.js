import React from 'react'
import GuestForm from './GuestForm'

const Header = ({ guestName, addGuest, handleNewGuestName }) => (
    <header>
        <h1>RSVP</h1>
        <GuestForm guestName={guestName} addGuest={addGuest} handleNewGuestName={handleNewGuestName}/>
    </header>
)

export default Header
