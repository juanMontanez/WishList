import React from 'react';
import PropTypes from 'prop-types';
import WishModal from './WishModal';

/**
 * Callback para ejecutar cuando se pulse el botón edit
 * @callback editClick - Callback que se ejecutará cuando se pulse el botón edit.
 */

/**
 * Renderiza el botón de editar
 * @param {editClick} callback - Callback para ejecutarse cuando se pulse el botón.
 * @param {Oject[]} item - Es un deseo
 * @param {String} item[].id - Identificador para el deseo.
 * @param {String} item[].text - Texto para el deseo.
 * @param {Boolean} item[].done - Estado del deseo.
 * @returns  Un modal con el contenido del item que se va a editar
 */
function WishEdit({ editClick, item }) {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary m-3"
        data-bs-toggle="modal"
        data-bs-target={`#ID-${item.id}`}
      >
        Edit
      </button>
      <WishModal item={item} editClick={editClick} />
    </>
  );
}

WishEdit.propTypes = {
  editClick: PropTypes.func,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }),
};

WishEdit.defaultProps = {
  item: { id: '0', text: 'Texto por defecto', done: false },
  editClick: () => {},
};

export default WishEdit;
