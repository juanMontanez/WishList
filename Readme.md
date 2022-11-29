# WishList
<p align="center">
    Proyecto de REACT en que se realiza un CRUD sobre deseos.
    <br />
</p>

## Lenguages/Frameworks que se usarón para el desarrollo de este proyecto:
Se utilizó el framework `React.js` con la sintaxis `jsx` para el renderizado y lógica de la aplicación junto con la librería `bootstrap` y `CSS` para el estilo.

## Requisitos
Tener instalado node.js en el equipo, el cual integra el `gestor de paquetes npm`

## Instalación
* Seguir los siguientes pasos:

1. Clonar el repositorio
   ```sh
   git clone https://github.com/juanMontanez/WishList.git
   ```
2. Ejecutar el paquete 
   ```sh
   npm start
   ```
## Uso
Al iniciar la aplicación se cargarán los deseos que hubiera guardados en el Local Storage de nuestro navegador

El uso de la aplicación es el siguiente:

* Buscar un deseo de la lista introduciendo el texto en la `barra de busqueda`, buscará automaticamente conforme se va escribiendo el texto que coincida con la lista de deseos
* Añadir un nuevo deseo introduciendo el texto en el campo de `new wish` pulsando intro o haciendo click el `botón Add` 
* En la lista de deseos podemos marcar el deseo como completado haciendo click en el `checkbox` de su lado izquierdo y en su lado derecho tenemos 2 botones:
    * El `botón Edit` que al pulsarlo nos mostrará un modal para editar el deseo
    * El `botón Delete` el cual elimirá el deseo al pulsarlo sin pedir confirmación
* Cada deseo se puede arrastar haciendo manteniendo click sobre él y moverlo a la posición deseada 
* Al final de la lista de deseos tenemos el `botón Save` que guardara la lista de deseos el  Local Storage de nuestro navegador

La interfaz es la siguiente:

<p align="center">
  <img src="https://i.ibb.co/BCZ1RGs/My-Wish-List.jpg" title="Interfaz My WishList">
</p>

## Contacto

Juan Montañez Palomino - juanmonpa88@gmail.com

Link del Projecto: [https://github.com/juanMontanez/WishList](https://github.com/juanMontanez/WishList)
