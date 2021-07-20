import React from 'react';
import PropTypes from 'prop-types';

import './zip.scss';

const Zip = ({ search, setSearch, makeSearch }) => {


    return (
        <div className="zipcode">
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    makeSearch();
                }}>
                <label htmlFor="zipcode" className="enterZip">Entrer un code postal:</label>
                <input
                    className="spaceZip"
                    type="text"
                    placeholder="Rechercher..."
                    id="zipcode"
                    name="zipcode"
                    value={search}
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }}
                ></input>
            </form>
        </div>
    );
};



Zip.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
    makeSearch: PropTypes.func.isRequired,
};

export default Zip;