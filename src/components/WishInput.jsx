import React, { useRef } from 'react';
// Solo me estoy trayendo una funcion y con el as le pongo el nombre que yo quiera
import { v4 as Uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

// El parametro entre llaves porque es un evento/funcion/objeto
function WishInput({ onNewWish }) {
  // Creamos una variable de tipo referencia para recuperar un elemento
  const inputText = useRef();
  return (
    <fieldset className="form-group">
      <legend>New Dish: </legend>
      <input
        className="form-control"
        type="text"
        placeholder="Enter your new wish"
        // Lo añadimos como atributo
        ref={inputText}
        onKeyUp={(event) => {
          if (event.key === 'Enter' && inputText.current.value.length > 0) {
            // creamos un evento nuevo que recibira 3 parametros
            onNewWish({ id: Uuidv4(), text: inputText.current.value, done: false });
            // Pongo el campo vacio
            inputText.current.value = '';
          }
        }}
      />
    </fieldset>
  );
}
// Props
// Se define el metodo
WishInput.propTypes = {
  onNewWish: PropTypes.func,
};
// Si nos llega la lista vacia le indicamos un valor por defecto
WishInput.defaultProps = {
  onNewWish: () => {},
};
export default WishInput;
