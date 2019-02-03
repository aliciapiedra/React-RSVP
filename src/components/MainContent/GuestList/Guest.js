import React from 'react';
import GuestName from './GuestName';

const Guest = ({ guest, toggleGuestProperty, handleChangeName, removeGuest }) => (
    <li>
        <GuestName isEditing={guest.isEditing} handleChangeName={e => handleChangeName(e.target.value)}>{guest.name}</GuestName>
        <label>
            <input
              onChange={toggleGuestProperty('isConfirmed', guest.id)}
              checked={guest.isConfirmed}
              type="checkbox" />
            Confirmed
        </label>
        <button onClick={toggleGuestProperty('isEditing', guest.id)}>{ guest.isEditing ? 'Save' : 'Edit'}</button>
        <button onClick={removeGuest}>remove</button>
    </li>
)

export default Guest
