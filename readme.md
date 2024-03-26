#### # Desafío - AbracadabraDesafío - Abracadabra
##### Descripción

------------
Los sitios web en la actualidad son la cara visible de las empresas en el mundo digital, por ello, requieren disponer de un espacio de fácil navegación e interesante para los usuarios. En este contexto, el instituto recreativo más conocido de la ciudad, contrató recientemente una asesoría de marketing para aumentar el tráfico en su sitio web. La consultora, en base al análisis realizado a la empresa contratante, les propone aumentar la interacción con los usuarios que visitan su sitio web, a través de la creación de juegos de azar con temáticas relacionadas a los diferentes shows que ofrece el instituto. Además, propone que estos juegos solo puedan realizarlos usuarios registrados, con el fin de generar más fidelidad con su público.
En este desafío, deberás desarrollar un servidor con Express que sirva un sitio web estático con temática de magia, donde se presenten 4 sombreros y al hacer click en uno de estos encontrar el conejo oculto.

------------
##### El servidor deberá disponibilizar las siguientes rutas: 
1. /abracadabra/usuarios: Se debe devolver un JSON con un arreglo de nombres alojado en el servidor.
2.  /abracadabra/juego/: usuario: A través de un middleware, verificar que el usuario escrito como parámetro existe en el arreglo alojado en el servidor.
3. /abracadabra/conejo/: n: Basado en un número aleatorio del 1 al 4, devolver la foto del conejo en caso de coincidir con el número recibido como parámetro ó devolver la foto de Voldemort en caso de no coincidir. 

------------

#### Requerimientos
1. Crear un servidor con Express en el puerto 3000. (2 Puntos)
2. Definir la carpeta “assets” como carpeta pública del servidor. (1 Punto)
3. Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de la ruta /abracadabra/usuarios. (2 Puntos)
4. Crear un middleware con la ruta /abracadabra/juego/:usuario para validar que el usuario recibido como parámetro “usuario” existe en el arreglo de nombres creado en el servidor. En caso de ser exitoso, permitir el paso a la ruta GET correspondiente, de lo contrario devolver la imagen “who.jpeg”. (2 Puntos)
5. Crear una ruta /abracadabra/conejo/:n que valide si el parámetro “n” coincide con el número generado de forma aleatoria. En caso de ser exitoso, devolver la imagen del conejo, de lo contrario devolver la imagen de Voldemort. (2 Puntos)
6. Crear una ruta genérica que devuelva un mensaje diciendo “Esta página no existe...” al consultar una ruta que no esté definida en el servidor. (1 Punto

------------
#### HTML
Se realizaron 5 archivos html para mejorar el dinamismo de la página:
1. index.html: página principal para ingreso de nombre de usuario
2. no_user.html: se muestra en caso de que el usuario no se encuentre dentro del listado de usuarios validados.
3. game.html: si el usuario está validado, se pasa acá donde se encuentran los sombreros
4. rabbit.html: muestra como resultado un conejo bailando en caso de que el sombrero seleccionado y el número arrojado con Math.random coincidan.
[![](https://media.tenor.com/I0c0dt-IyL0AAAAi/kiss.gif)](https://media.tenor.com/I0c0dt-IyL0AAAAi/kiss.gif)

5. not_found.html: muestra como resultado un conejo enojado en caso de que el sombrero seleccionado y el número arrojado con Math.random no coincidan.
[![](https://media.tenor.com/xtVbcARq5egAAAAi/cute-bunny.gif)](https://media.tenor.com/xtVbcARq5egAAAAi/cute-bunny.gif)
