import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";
import "./WishItem.css";
import WishDelete from "./WishDelete";


/**
 * Callback para setear un lista de deseos
 * @callback setWishes - Callback que se ejecutara cuando se setea la lista de deseos.
 * @param {Oject[]} wishes - Lista de deseos
 */

/**
 * Callback para ejecutar cuando un deseo cambie
 * @callback onChangeWish - Callback que se ejecutara cuando un deseo cambie.
 * @param {Oject[]} item - Es un deseo
 * @param {String} item[].id - Identificador para el deseo.
 * @param {String} item[].text - Texto para el deseo.
 * @param {Boolean} item[].done - Estado del deseo.
 */

/**
 * Administra un deseo
 * @param {setWishes} callback - Callback que setear el array de deseos
 * @param {Oject[]} wishes - lista de deseos
 * @param {String} wishes[].id - Identificador para el deseo.
 * @param {String} wishes[].text - Texto para el deseo.
 * @param {Boolean} wishes[].done - Estado del deseo.
 * @param {Oject[]} item - Es un deseo
 * @param {String} item[].id - Identificador para el deseo.
 * @param {String} item[].text - Texto para el deseo.
 * @param {Boolean} item[].done - Estado del deseo.
 * @param {onChangeWish} callback - Callback para ejecutarse cuando un deseo cambie.
 * @returns  HTML con un deseo
 */
function WishItem({ setWishes, wishes, item, onChangeWish }) {
  return (
    <li className="list-group-item WishItem">
      <input
        type="checkbox"
        defaultChecked={item.done}
        id={item.id}
        onChange={(event) => {
          onChangeWish({
            id: item.id,
            text: item.text,
            done: event.target.checked,
          });
        }}
      />
      <label
        className={ClassNames({
          "text-decoration-line-through": item.done,
          "wish-item-done": item.done,
        })}
        htmlFor={item.id}
      >
        {item.text}
      </label>

      
      <WishDelete
        item={item}
        deleteClick={(del) => {
          const newArray = wishes.filter((wish) => del.id !== wish.id);
          setWishes(newArray);
        }}
      />
    </li>
  );
}

WishItem.propTypes = {
  setWishes: PropTypes.func,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }),
  wishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ),
  onChangeWish: PropTypes.func,
};

WishItem.defaultProps = {
  wishes: [],
  item: { id: "0", text: "Texto por defecto", done: false },
  setWishes: () => {},
  onChangeWish: () => {},
};

export default WishItem;
