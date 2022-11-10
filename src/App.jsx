import React, { useState } from 'react';
import { v4 as Uuidv4 } from 'uuid';
import Wishlist from './components/Wishlist';
import WishInput from './components/WishInput';
import WishSave from './components/WishSave';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import logo from './assets/react.svg';

/**
 * Administra una lista de deseos
 * @returns Html con una lista de deseos
 */
function App() {
  let initialWishes = JSON.parse(localStorage.getItem('WISHES'));

  if (!initialWishes) {
    initialWishes = [
      { id: Uuidv4(), text: 'Aprender React', done: false },
      { id: Uuidv4(), text: 'Aprender Bootstrap', done: false },
      { id: Uuidv4(), text: 'Aprender Javascript', done: false },
      { id: Uuidv4(), text: 'Aprender frontend', done: true },
    ];
  }

  // useState devuelve una variable y una funcion que modifica esa variable,
  // dandole un estado a esa variable
  // Se utiliza estados para componentes dinamicos
  const [wishes, setWishes] = useState(initialWishes);
  console.log(wishes);

  return (
    <div className="container-fluid">
      <h1>My Wishlist</h1>
      <div className="header-img">
        <img src={logo} alt="50px" width="50px" />
      </div>
      
      <WishInput
        onNewWish={(newWish) => {
          console.log('Se ha lanzado el evento');
          // Coge el array y le añade al final el newWish
          setWishes([...wishes, newWish]);
        }}
      />
      <Wishlist
        wishes={wishes}
        // El deseo actualizado llega a appp desde wishlist
        onUpdateWish={(updateWish) => {
          /*
        //console.log(onUpdateWish);
        const updateWishes = wishes.map((wish) => {
          if(wish.id === updatedWish.id) {
            return updatedWish;
          }
          return wish;
        }); */
          // Copiamos el array wishes
          const updatedWishes = [...wishes];
          // Recorremo el array y buscamos obejtos con el mismo id
          const modifyWish = updatedWishes.find(
            (wish) => wish.id === updateWish.id,
          );
          // Una vez encontrado modificamos los valores
          modifyWish.text = updateWish.text;
          modifyWish.done = updateWish.done;
          setWishes(updatedWishes);
        }}
      />
      <WishSave
        onWishesSave={() => {
          console.log('Saving wishes...');
          localStorage.setItem('WISHES', JSON.stringify(wishes));
        }}
      />
    </div>
  );
}

export default App;
