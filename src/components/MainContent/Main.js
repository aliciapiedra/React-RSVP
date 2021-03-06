import React from 'react'
import Counter from './Counter'
import GuestList from './GuestList/GuestList'
import ConfirmedFilter from './ConfirmedFilter'

const Main = ({
  guests,
  isFiltered,
  toggleFilter,
  guestList,
  toggleGuestProperty,
  handleChangeName,
  guestName,
  removeGuest,
  totalInvited,
  numberAttending,
  numberUnconfirmed
}) => (
    <div className="main">
        <ConfirmedFilter
          toggleFilter={toggleFilter}
          isFiltered={isFiltered}
           />
        <Counter numberUnconfirmed={numberUnconfirmed} numberAttending={numberAttending} totalInvited={totalInvited}/>
        <GuestList
          removeGuest={removeGuest}
          guestName={ guestName }
          toggleGuestProperty={toggleGuestProperty}
          isFiltered={isFiltered}
          guestList={guestList}
          guests={guests} 
          handleChangeName={handleChangeName}/>
    </div>
)

export default Main
