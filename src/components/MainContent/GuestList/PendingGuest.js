import React from 'react';

const PendingGuest = ({ guestName }) => guestName && <li className="pending"><span>{guestName}</span></li>

export default PendingGuest
