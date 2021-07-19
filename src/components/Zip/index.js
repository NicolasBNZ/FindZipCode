import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import './zip.scss';

const Zip = ({ search, setSearch }) => {
    // https://reactjs.org/docs/hooks-reference.html#useref
    // we begin with an empty box
    const refInput = useRef(null);

    return (
        <div className="zipcode">
            <form>
                <label htmlFor="zipcode" className="enterZip">Entrer un code postal:</label>
                <input
                    className="spaceZip"
                    ref={refInput}
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
    // makeSearch: PropTypes.func.isRequired,
};

export default Zip;