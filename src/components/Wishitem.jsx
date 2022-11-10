import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";
import "./WishItem.css";
import WishInput from "./WishInput";

function Wishitem({ item, onChangeWish }) {
  const deleteWish = (id) => {
    setWish(item.filter(item => item.id !== id))
}
  return (
    // El li necesita una clave que sea diferente para cada elemento de la lista
    <li className="list-group-item wishItem">
      <input
        type="checkbox"
        defaultChecked={item.done}
        id={item.id}
        // Evento para cuando cambie el deseo mando hacia wishlist ya modificado
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
      <button type="button" className="btn btn-primary m-3" value="edit">Edit</button>
      <button type="button" className="btn btn-danger m-1">Delete</button>

    </li>
  );
}
// Props
// Se define el metodo
Wishitem.propTypes = {
  // Y en el contenido se llama al metodo shape porque es un objeto que contiene
  item: PropTypes.shape({
    // Un string y un boolean y que es requerido
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }),
  onChangeWish: PropTypes.func,
};
// Si nos llega la lista vacia le indicamos un valor por defecto
Wishitem.defaultProps = {
  item: { id: "0", text: "Texto por defecto", done: false },
  onChangeWish: () => {},
};

export default Wishitem;
