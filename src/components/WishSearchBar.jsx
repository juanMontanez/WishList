import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

/**
 * Callback que se ejecuta cuando el usuario escribe en el input.
 * @callback onChange - Callback que se ejecuta cuando el input camia.
 */

/**
 * Barra de busqueda para los deseos
 * @param {String} props - Recoge el valor del input del deseo a buscar
 * @param {Oject[]} wishes - lista de deseos
 * @param {String} wishes[].id - Identificador para el deseo.
 * @param {String} wishes[].text - Texto para el deseo.
 * @param {Boolean} wishes[].done - Estado del deseo.
 * @param {onChange} callback - Callback para ejecutarse cuando escribamos en la barra de busqueda.
 * @returns  HTML con la lista de deseos que coinciden con los valores de la busqueda
 */
function WishSearchBar({ onChange, wishes, props }) {
  const [setFilterWishes] = useState([]);
  const inputRef = useRef(null);

  /**
   * Obtiene una lista de deseos filtrados por el valor del input de la barra de búsqueda
   * @returns Lista de deseos filtrados de la barra de búsqueda
   */
  const inputHandler = () => {
    const filterWishes = wishes.filter((element) => {
      if (props.input === "") {
        return wishes;
      }
      return element.text.includes(inputRef.current.value);
    });
    setFilterWishes(filterWishes);
  };
  return (
    <form className="input-group">
      <span className="input-group-text" id="basic-addon1">
        Search Wishes :
      </span>
      <input
        className="form-control"
        ref={inputRef}
        type="text"
        name="search"
        onChange={onChange}
        placeholder="Enter the wish to search for..."
      />
      <button
        className="btn btn-secondary"
        type="button"
        onClick={inputHandler}
      >
        Buscar
      </button>
    </form>
  );
}

WishSearchBar.propTypes = {
  props: PropTypes.string,
  input: PropTypes.elementType,
  wishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ),
  onChange: PropTypes.func,
};

WishSearchBar.defaultProps = {
  props: " ",
  input: null,
  wishes: [],
  onChange: () => {},
};

export default WishSearchBar;
