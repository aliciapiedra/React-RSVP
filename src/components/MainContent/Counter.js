import React from 'react';

const Counter = props => (
    <table className="counter">
        <tbody>
            <tr>
                <td>Attending:</td>
                <td>attending</td>
            </tr>
            <tr>
                <td>Unconfirmed:</td>
                <td>unconfirmed guests</td>
            </tr>
            <tr>
                <td>Total:</td>
                <td>total invited</td>
            </tr>
        </tbody>
    </table>
)

export default Counter
