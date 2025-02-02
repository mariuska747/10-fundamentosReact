## dia 2 installation

> npm create vite@latest

> npm i

> npm run build

(build genera una carpeta dist para entregar a producción)

> npm run preview

(preview me muestra el codigo de producción)

> npm run dev

(dev entorno de desarrollo)

(prettier):

> npm install --save-dev --save-exact prettier

luego creamos un fichero .prettierrc donde podemos especificar reglas personalizadas en un objeto

Luego en el package json para que nos vaya actualizando segun salvamos y formateando escribimos en los scripts el siguiente:

> "format": "prettier --write .",
