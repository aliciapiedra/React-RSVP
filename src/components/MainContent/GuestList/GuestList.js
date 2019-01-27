import React from 'react';
import Guest from './Guest'
import PendingGuest from './PendingGuest'

const GuestList = ({
  guestList,
  toggleGuestProperty,
  handleChangeName
}) => (
    <ul>
      { guestList.map(g =>
        <Guest
          handleChangeName={text => handleChangeName(text, g.id)}
          toggleGuestProperty={toggleGuestProperty} 
          guest={g}
          key={g.id} />) }
    </ul>
)

export default GuestList;
