import React from 'react';

const Counter = ({ numberUnconfirmed, totalInvited, numberAttending })=> (
    <table className="counter">
        <tbody>
            <tr>
                <td>Attending:</td>
                <td>{numberAttending}</td>
            </tr>
            <tr>
                <td>Unconfirmed:</td>
                <td>{numberUnconfirmed}</td>
            </tr>
            <tr>
                <td>Total:</td>
                <td>{totalInvited}</td>
            </tr>
        </tbody>
    </table>
)

export default Counter
