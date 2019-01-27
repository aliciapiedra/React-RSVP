import React from 'react'

const ConfirmedFilter = ({ toggleFilter, isFiltered }) => (
    <div>
        <h2>Invitees</h2>
        <label>
            <input
              onChange={toggleFilter}
              checked={isFiltered}
              type="checkbox" />
            Hide those who haven't responded
        </label>
    </div>
)

export default ConfirmedFilter
