import React from 'react';
import PropTypes from 'prop-types';

/**
 * Callback para ejecutar cuando se pulse el botón delete
 * @callback deleteClick - Callback que se ejecutará cuando se pulse el botón delete.
 */

/**
 * Renderiza el botón delete
 * @param {deleteClick} callback - Callback para ejecutarse cuando se pulse el botón delete.
 * @param {Oject[]} item - Es un deseo
 * @param {String} item[].id - Identificador para el deseo.
 * @param {String} item[].text - Texto para el deseo.
 * @param {Boolean} item[].done - Estado del deseo.
 */
function WishDelete({ deleteClick, item }) {
  return (
    <input
      type="button"
      className="btn btn-danger m-1"
      value="Delete"
      onClick={() => deleteClick(item)}
    />
  );
}

WishDelete.propTypes = {
  deleteClick: PropTypes.func,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }),
};

WishDelete.defaultProps = {
  item: { id: '0', text: 'Texto por defecto', done: false },
  deleteClick: () => {},
};

export default WishDelete;
