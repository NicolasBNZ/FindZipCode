import React from 'react';


import './zip.scss';

const Zip = () => {
    return (
        <div className="zipcode">
            <label for="zipcode">Entrer un code postal:</label>
            <input type="text" id="zipcode" name="zipcode"></input>
        </div>

    );
};

export default Zip;