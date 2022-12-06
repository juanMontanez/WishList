import React, { useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Renderiza el modal de editar.
 * @param {editClick} callback - Callback que se ejecuta cuando el usuario hace click
 * @param {Oject[]} item - Es un deseo
 * @param {String} item[].id - Identificador para el deseo.
 * @param {String} item[].text - Texto para el deseo.
 * @param {Boolean} item[].done - Estado del deseo.
 */
function WishModal({ editClick, item }) {
  /**
   * Obtiene el valor del input del modal
   * @returns El valor del input del modal
   */
  const inputRef = useRef(null);
  return (
    <div
      className="modal fade"
      id={`ID-${item.id}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edit Wish
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <input ref={inputRef} type="text" defaultValue={item.text} />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                const editItem = {
                  id: item.id,
                  text: inputRef.current.value,
                  done: item.done,
                };
                editClick(editItem);
              }}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

WishModal.propTypes = {
  editClick: PropTypes.func,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }),
};

WishModal.defaultProps = {
  item: { id: '0', text: 'Texto por defecto', done: false },
  editClick: () => {},
};

export default WishModal;
