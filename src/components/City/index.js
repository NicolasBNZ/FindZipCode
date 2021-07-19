import React from 'react'
// import PropTypes from 'prop-types';

import Repo from '../City/Repo';
// import data from 'D://CODE/Code postal/findzipcode/findzipcode/src/data/departements.json'
import data from 'D://CODE/Code postal/findzipcode/findzipcode/src/data/codepostal.json'

import './city.scss';


function City() {
    return (
        <div className="cityName">
            {data.map((repos) => (
                <Repo key={repos.id} {...repos} />
            ))}
        </div>
    )
}

// City.propTypes = {
//     data: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//       }).isRequired,
//     ).isRequired,
//   };

export default City
