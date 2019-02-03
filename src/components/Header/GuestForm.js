import React from 'react'

const GuestForm = ({ guestName, addGuest, handleNewGuestName}) => (
    <form onSubmit={addGuest}> 
        <input onChange={handleNewGuestName} value={guestName} type="text" placeholder="Invite Someone" />
        <button type="submit" name="submit">Submit</button>
    </form>
)

export default GuestForm
