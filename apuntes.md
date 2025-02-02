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

Luego en el package.json para que nos vaya actualizando segun salvamos y formateando escribimos en los scripts el siguiente:

> "format": "prettier --write .",

Tailwind con vite:
> npm install tailwindcss @tailwindcss/vite

(seguir instrucciones de la web instalacion con vite)

Tailwind y prettier
> npm install prettier-plugin-tailwindcss

Prettier configuration file:
> "plugins": ["prettier-plugin-tailwindcss"]

Styled components (para un boton por ejemplo)
> npm install styled-components