import React, { useRef } from "react";
import { v4 as Uuidv4 } from "uuid";
import PropTypes from "prop-types";
import WishAdd from "./WishAdd";

/**
 * Callback para ejecutar cuando se cree un deseo nuevo
 * @callback onNewWish - Callback que se ejecutara cuando se cree un deseo nuevo.
 */

/**
 * Crea nuevos deseos
 * @param {onNewWish} callback - Callback para ejecutarse cuando se cree un deseo nuevo.
 * @returns  Un nuevo deseo a la lista
 */
function WishInput({ onNewWish }) {
  const inputText = useRef();
  /**
   * Añade un deseo a la lista
   * @returns Un deseo nuevo al pulsar intro
   */
  const add = (event) => {
    if (event.key === "Enter" && inputText.current.value.length > 0) {
      // creamos un evento nuevo que recibira 3 parametros
      onNewWish({ id: Uuidv4(), text: inputText.current.value, done: false });
      // Pongo el campo vacio despues haber introducido el nuevo deseo
      inputText.current.value = "";
    }
  };

  return (
    <fieldset className="input-group">
      <legend>New Wish: </legend>
      <input
        className="form-control"
        type="text"
        placeholder="Enter your new wish"
        // Lo añadimos como atributo
        ref={inputText}
        onKeyUp={add}
      />
      <WishAdd
        addClick={() => {
          if (inputText.current.value.length > 0) {
            // creamos un evento nuevo que recibira 3 parametros
            onNewWish({
              id: Uuidv4(),
              text: inputText.current.value,
              done: false,
            });
            // Pongo el campo vacio despues haber introducido el nuevo deseo
            inputText.current.value = "";
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
