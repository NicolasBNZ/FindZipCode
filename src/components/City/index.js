import React from 'react'
import PropTypes from 'prop-types';

import Repo from '../City/Repo';

import '../City/city.scss';


function City({ repos }) {
    console.log('repos dans City', repos);
    return (
        <div className="cityName">
            {repos.map((repo) => (
                <Repo key={repo.code} {...repo} />
            ))}
        </div>
    )
}


City.propTypes = {
    repos: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

export default City
