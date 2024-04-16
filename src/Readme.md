Primero, inicializa learnyounode. Luego elige el programa que deseas probar.

En caso de que falle algún archivo, recuerda que deberás instalar las dependencias correspondientes. Por ejemplo, para el caso de http-collect, utiliza el siguiente comando:

npm i --save-dev @types/node
Para probar, dado que está compilado de TypeScript a JavaScript, accede a la carpeta dist para cargar la prueba efectivamente.

Luego, dentro de la prueba seleccionada en el menú de learnyounode, aplica el comando learnyounode verify xxxx.js.