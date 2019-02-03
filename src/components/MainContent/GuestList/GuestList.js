import React from 'react';
import Guest from './Guest'
import PendingGuest from './PendingGuest'

const GuestList = ({
  guestList,
  toggleGuestProperty,
  handleChangeName,
  guestName,
  removeGuest
}) => (
    <ul>
      <PendingGuest guestName={guestName} />
      { guestList.map(g =>
        <Guest
          removeGuest={() => removeGuest(g.id)}
          handleChangeName={text => handleChangeName(text, g.id)}
          toggleGuestProperty={toggleGuestProperty} 
          guest={g}
          key={g.id} />) }
    </ul>
)

export default GuestList;
