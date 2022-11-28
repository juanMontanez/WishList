import React, { useRef } from "react";
import PropTypes from "prop-types";
import Wishitem from "./WishItem";

/**
 * Callback para setear un lista de deseos
 * @callback setWishes - Callback que se ejecutara cuando se setea la lista de deseos.
 * @param {Oject[]} wishes - Lista de deseos
 */

/**
 * Callback para ejecutar cuando un deseo cambie
 * @callback onUpdateWish - Callback que se ejecutara cuando un deseo cambie.
 * @param {object} updatedWish - Deseo con nuevos valores.
 * @param {String} updatedWish.id - Identificador para el deseo.
 * @param {String} updatedWish.text - Texto para el deseo.
 * @param {Boolean} updatedWish.done - Estado del deseo.
 */

/**
 * Administra la lista de deseos
 * @param {String} props - Recoge el valor del input del deseo a buscar
 * @param {setWishes} callback - Callback que setear el array de deseos
 * @param {Oject[]} wishes - lista de deseos
 * @param {String} wishes[].id - Identificador para el deseo.
 * @param {String} wishes[].text - Texto para el deseo.
 * @param {Boolean} wishes[].done - Estado del deseo.
 * @param {onUpdateWish} callback - Callback para ejecutarse cuando un deseo cambie.
 * @returns  HTML con una lista de deseos
 */
function WishList({ props, setWishes, wishes, onUpdateWish }) {
  /**
   * Obtiene una lista de deseos filtrados por el valor del input de la barra de búsqueda
   * @returns Lista de deseos filtrados de la barra de búsqueda
   */
  const filter = wishes.filter((e) => {
    if (props.input === "") {
      return e;
    }
    return e.text.toLowerCase().includes(props);
  });

  // Guardamos las referencias de un item y su posicion sobre otro item
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  /**
   * Gestiona el orden de los deseos al arrastralos
   * @returns Lista de deseos ordenados
   */
  const handleSort = () => {
    const copywishes = [...filter];
    // Cambiamos contenido del array eliminando elementos existentes y/o agregando nuevos elementos.
    const draggedItemContent = copywishes.splice(dragItem.current, 1)[0];
    copywishes.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;

    // Actualizamos el array una vez que los items estan ordenados
    setWishes(copywishes);
  };

  return (
    <ul className="list-group">
      <legend className="m-1">Wishes: </legend>
      {filter.map(({ id, text, done }, index) => (
        <div
          key={id}
          draggable
          onDragStart={() => (dragItem.current = index)}
          onDragEnter={() => (dragOverItem.current = index)}
          onDragEnd={handleSort}
          onDragOver={(e) => e.preventDefault()}
        >
          <Wishitem
            setWishes={setWishes}
            wishes={wishes}
            item={{ id, text, done }}
            key={`#${id}`}
            onChangeWish={(updateWish) => {
              onUpdateWish(updateWish);
            }}
          />
        </div>
      ))}
    </ul>
  );
}

WishList.propTypes = {
  props: PropTypes.string,
  input: PropTypes.elementType,
  setWishes: PropTypes.func,
  wishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ),
  onUpdateWish: PropTypes.func,
};

WishList.defaultProps = {
  props: " ",
  input: null,
  wishes: [],
  setWishes: () => {},
  onUpdateWish: () => ({ id: "", text: "", done: false }),
};

export default WishList;
