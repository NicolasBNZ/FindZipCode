import React from 'react'
import PropTypes from 'prop-types';

function Repo({ nom, codeDepartement }) {
    return (
        <div>
            <h3>{nom} ({codeDepartement})</h3>
        </div>
    )
}

Repo.propTypes = {
    nom: PropTypes.string.isRequired,
    codeDepartement: PropTypes.string.isRequired,
};

export default Repo
