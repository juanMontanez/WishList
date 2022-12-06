import React from 'react';
import PropTypes from 'prop-types';

/**
 * Callback que se ejecuta cuando el usuario hace click.
 * @callback onWishesSave - Callback que se ejecuta cuando el deseo camia.
 */

/**
 * Renderiza la acción de un botón.
 * @param {onWishesSave} callback - Callback que se ejecuta cuando el usuario hace click
 */
function WishSave({ onWishesSave }) {
  return (
    <input
      className="btn btn-success m-4"
      type="button"
      value="Save"
      onClick={onWishesSave}
    />
  );
}

WishSave.propTypes = {
  onWishesSave: PropTypes.func,
};

WishSave.defaultProps = {
  onWishesSave: () => {},
};

export default WishSave;
