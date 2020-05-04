import React from 'react';
import PropTypes from 'prop-types';

export default function TechItem({tech = '', onDelete}) {
  return (
    <li>
      {tech}
      <button 
        style={{marginLeft: 10}} 
        onClick={onDelete} 
        type='button'>
        Remover
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: "Hidden",
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};
