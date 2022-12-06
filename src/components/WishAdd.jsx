import React from 'react';
import PropTypes from 'prop-types';

/**
 * Callback para ejecutar cuando se pulse el botón add
 * @callback addClick - Callback que se ejecutará cuando se pulse el botón add.
 */

/**
 * Renderiza el botón add
 * @param {addClick} callback - Callback para ejecutarse cuando se pulse el botón add.
 */
function WishAdd({ addClick }) {
  return (
    <div>
      <input
        type="button"
        className="btn btn-primary"
        value="Add"
        onClick={addClick}
      />
    </div>
  );
}

WishAdd.propTypes = {
  addClick: PropTypes.func,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }),
};

WishAdd.defaultProps = {
  item: { id: '0', text: 'Texto por defecto', done: false },
  addClick: () => {},
};

export default WishAdd;
