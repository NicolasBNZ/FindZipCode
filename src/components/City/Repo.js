import React from 'react'
import PropTypes from 'prop-types';

import '../City/repo.scss';

function Repo({ nom }) {
    return (
        <div className="displayCity">
            <h3 className="nameCity">{nom}</h3>
        </div>
    )
}

Repo.propTypes = {
    nom: PropTypes.string.isRequired,
    codeDepartement: PropTypes.string.isRequired,
};

export default Repo
