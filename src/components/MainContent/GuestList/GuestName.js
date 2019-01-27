import React from 'react'

const GuestName = ({ isEditing, handleChangeName, children }) => (
    isEditing ? <input type="text" value={children} onChange={handleChangeName} />
    : <span> { children } </span>
)
export default GuestName
