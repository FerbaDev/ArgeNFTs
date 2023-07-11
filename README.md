# ArgeNFTs

[![imagen](https://res.cloudinary.com/dwl4yy7q6/image/upload/v1685704340/tp%20react/sailenore/soldemayo_z3cgvt.png "imagen")](https://res.cloudinary.com/dwl4yy7q6/image/upload/v1685704340/tp%20react/sailenore/soldemayo_z3cgvt.png "imagen")

Este proyecto se trata de una página de venta de NFTs relativos a la Argentina. Fue creado como trabajo final del curso de React JS de Coderhouse.
El objetivo es mostrar y vender NFTs que homenajeen a personajes, paisajes, elementos y obras emblematicos de la Argentina, como así también a sus artistas digitales.

## Herramientas y librerías usadas en este proyecto

Para el desarrollo de este proyecto se utilizaron las siguientes herramientas y librerías:

- Node JS y NPM: Como entorno de ejecución de JavaScript y manejo de paquetería.

- React y Vite: En este curso el profesor nos enseñó a crear un proyecto de React con Vite. Por ser lo más actual y lo más rápido. Aprendí sobre la sintaxis JSX, componentes, renderizado, hooks, estilos y fuentes.

- Material UI: una librería de componentes UI para React. La utilicé para hacer la navbar, inputs, buttons, progress, cart widget y también usé varias de sus cajas prediseñadas como Box, Card. Usé varios de los estilos default ya que iban a tono con la paleta de colores que habia pensado.

- Cloudinary: usé esta base de datos para utilizar imagenes mediante URLs.

- React Router DOM: para configurar la navegabilidad entre los componentes.

- Firebase: para crear la base de datos de productos.

- Formik y Yup: para crear formularios con toda la lógica necesaria implícita y su respectiva validación. Excelentes herramientas.

- Sweet Alert 2: para crear alertas preestiladas.

![](https://res.cloudinary.com/dwl4yy7q6/image/upload/v1689010252/tp%20react/captura_argenfts_yhstrx.png)

### Instrucciones para clonar y ejecutar este proyecto

Para levantar este proyecto hay que tener instaladas las dependencias de las librerías y herramientas anteriormente mencionadas, sumado a que son necesarias las variables de entorno.

1. Clonamos el repositorio con el siguiente comando:

> `$ git clone https://github.com/FerbaDev/TP-React-Fernando_Barron.git`

2. Instalar las dependencias necesarias:

instalacion de Material UI:

> `$ npm install @mui/material @emotion/react @emotion/styled`

> `$ npm install @mui/material @mui/styled-engine-sc styled-components`

> `$ npm install npm install @fontsource/roboto`

> `$ npm install formik`

> `$ npm install yup`

> `$ npm install sweetalert2`

> `$ npm install react-router-dom`

3. Crear un archivo `.env` en la raiz del proyecto con las siguientes variables de entorno:

```
    VITE_APIKEY=AIzaSyAOKZy5t9hWL6KJ4NytNiDFWyRsJ4e-IjE
    VITE_AUTH_DOMAIN=trabajo-react-fer.firebaseapp.com
    VITE_PROJECT_ID=trabajo-react-fer
    VITE_STORAGE_BUCKET=trabajo-react-fer.appspot.com
    VITE_MESSAGING=781629716369
    VITE_APP_ID=1:781629716369:web:a7379e8e93b2c3804f0c30
```

4. Ejecutar el proyecto ejecutando `npm run dev`
5. Acceder al local host haciendo Ctrl y click en el enlace al mismo.

El deploy esta hecho en Vercel y pueden conocer la página haciendo click [aquí](https://tp-react-fernando-barron.vercel.app/).
