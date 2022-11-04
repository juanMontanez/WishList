import React from 'react';
import PropTypes from 'prop-types';
import Wishitem from './Wishitem';
/**
 * Callback para ejecutar cuando un deseo cambie
 * @callback onUpdateWish - Callback que se ejecutara cuando un deseo cambie.
 * @param {object} updatedWish - Deseo con nuevos valores.
 * @param {String} updatedWish.id - Identificador para el deseo.
 * @param {String} updatedWish.text - Texto para el deseo.
 */

/**
 * Administra la lista de deseos
 * @param {Oject[]} wishes - lista de deseos
 * @param {String} wishes[].id - Identificador para el deseo.
 * @param {String} wishes[].text - Texto para el deseo.
 * @param {onUpdateWish} callback - Callback para ejecutarse cuando un deseo cambie.
 * @returns  HTML con una lista de deseos
 * @todo Fix array.
 */
function Wishlist({ wishes, onUpdateWish }) {
  return (
    <ul className="list-group">
      {wishes.map(({ id, text, done }) => (
        // Llamamos a la función con el mismo nombre del objeto que definimos
        // las llaves de dentro indentifica que es un objeto,
        // y las llaves de fuera es para indicar que es contenido javascript
        <Wishitem
          item={{ id, text, done }}
          key={`wishItem-${id}`}
        // Nos subscribimos a onChangeWish
          onChangeWish={(updateWish) => {
          // lanza un nuevo evento al padre que seria app
            onUpdateWish(updateWish);
          }}
        />
      ))}
    </ul>
  );
}
// Se define el metodo
Wishlist.propTypes = {
  // Definimos que wishes es un array de...
  wishes: PropTypes.arrayOf(
    // Y en el contenido se llama al metodo shape porque es un objeto que contiene
    PropTypes.shape({
      // Un id, un string y un boolean y que es requerido
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ),
  onUpdateWish: PropTypes.func,
};
// Si nos llega la lista vacia le indicamos un valor por defecto
Wishlist.defaultProps = {
  wishes: [],
  onUpdateWish: () => ({ id: '', text: '', done: false }),
};
export default Wishlist;
