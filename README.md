disponemos de 2 paginas, 1 de login, en el que usamos jwt para logear al usuario o crearlo en el que guardara en las cookies el token y el usuario se guarda en localstorage, si no te encuentras logeado la pagina te redirige al login.
En el index.html lo primero que hace buscar al usuario en localstorage y lo guarda en un objeto global para hacer uso de este sin hacer peticiones, se hace una autenticacion del usuario mediante la cookie y ya tendriamos disponible la funcionalidad del index.html.
Se generara nada mas cargue la pagina todos los eventos que solo los usuarios administradores pueden crear, editar y eliminar, arriba a la izq tendremos los iconos de la imagen del usuario el cual si hacemos click podremos modificar la imagen de su perfil, unos bocaditos
que abrira un modal para el uso de ws y el de logout para ir al index limpiando el sessionstorage. Si el usuario es admin se renderiza un li en la navegacion para crear eventos. (hay que recargar la pagina). 
El ws he intentado adaptarlo para el despliegue pero no lo he conseguido solo me funciona en local. Solo he probado a desplegar el back en render, para ello es necesario un npm i && node server.js. Ademas del uso del .env que seria el siguiente: 
DB_USER=alvaroacu 
DB_PASS=pB18CuGiZF5q2Veo 
PORT=3000 DB_HOST=127.0.01 
SECRET_KEY='Bandolero4life'
