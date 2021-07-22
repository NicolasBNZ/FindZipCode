import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'semantic-ui-react';

import './zip.scss';

const Zip = ({ search, setSearch, makeSearch }) => {


    return (
        <div className="zipcode">
            <form className="formZip"
                onSubmit={(event) => {
                    event.preventDefault();
                    makeSearch();
                }}>
                <div className="inputZip">
                    <Input
                        className="ui big icon input"
                        type="text"
                        placeholder="Entrer un code postal"
                        id="zipcode"
                        name="zipcode"
                        value={search}
                        onChange={(event) => {
                            setSearch(event.target.value);
                        }}
                    ></Input>
                    <Button className="ui button">Valider</Button>
                </div>

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