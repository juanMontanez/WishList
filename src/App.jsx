import React, { useState } from "react";
import { v4 as Uuidv4 } from "uuid";
import WishList from "./components/WishList";
import WishInput from "./components/WishInput";
import WishSave from "./components/WishSave";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import logo from "./assets/react.svg";

/**
 * Administra una lista de deseos
 * @returns Html con una lista de deseos
 */
function App() {
  /**
   * Obtiene una lista de deseos
   * @returns JSON con la lista de deseos almacenadas en el LocalStorage
   */
  let initialWishes = JSON.parse(localStorage.getItem("WISHES"));

  /**
   * Gestiona el input del campo de busqueda
   * @returns el input del campo de busqueda, que es seteado con setInput
   */
  const [input, setInput] = useState("");

  /**
   * Obtiene el input del campo de busqueda
   * @returns el input del campo de busqueda en minúsculas, que es seteado con setInput
   */
  const search = (event) => {
    const lowerCase = event.target.value.toLowerCase();
    setInput(lowerCase);
  };

  if (!initialWishes) {
    initialWishes = [
      { id: Uuidv4(), text: "Aprender React", done: false },
      { id: Uuidv4(), text: "Aprender Bootstrap", done: false },
      { id: Uuidv4(), text: "Aprender Javascript", done: false },
      { id: Uuidv4(), text: "Aprender frontend", done: true },
    ];
  }

  /**
   * Gestiona el array de los deseos
   * @returns un array de deseos, que es seteada con setWishes
   */
  const [wishes, setWishes] = useState(initialWishes);

  return (
    <div className="container-fluid">
      <h1>My Wishlist</h1>
      <div className="header-img m-4">
        <img src={logo} alt="50px" width="50px" />
      </div>
     
      <WishInput
        onNewWish={(newWish) => {
          setWishes([...wishes, newWish]);
        }}
      />
      <WishList
        props={input}
        setWishes={setWishes}
        wishes={wishes}
        onUpdateWish={(updateWish) => {
          const updatedWishes = [...wishes];
          const modifyWish = updatedWishes.find(
            (wish) => wish.id === updateWish.id
          );
          modifyWish.text = updateWish.text;
          modifyWish.done = updateWish.done;
          setWishes(updatedWishes);
        }}
      />
      <WishSave
        onWishesSave={() => {
          console.log("Saving wishes...");
          localStorage.setItem("WISHES", JSON.stringify(wishes));
        }}
      />
    </div>
  );
}

export default App;
