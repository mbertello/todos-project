
# Todos – Lista de tareas pendientes

Este proyecto implementa un API para la gestion de tareas. Posee acciones para recuperar el listado de tareas pendientes, y búsqueda mediante criterios de filtrado (Id de tarea, descripción y mostrar tareas resueltas); el alta; y cambio de estado. Además consta de un proyecto en ReactJS que implementa un front-end que consume los servicios de la API.


## Comenzando 🚀

Para el clonado del repositorio digite el siguiente comando parado en el directorio que alojará el proyecto:

git clone https://github.com/mbertello/todos-project.git


### Pre-requisitos 📋

Para correr la API necesitará tener instalados: 

       * runtime “ASP.NET Core Runtime 3.1.2” 
       (instrucciones en: https://docs.microsoft.com/en-us/dotnet/core/install/runtime).

       * “SDK 3.1.102” de .Net Core 3.1 
       (instrucciones en: https://docs.microsoft.com/en-us/dotnet/core/install/sdk).

Además, para analizar el código, puede usar un editor como Visual Studio Code (recomendado). Las dirección de descarga de los instaladores, según el sistema operativo, es: 

        https://code.visualstudio.com/download.

Dependiendo del S.O. en que trabaje podrá disponer de la instalación mediante un gestor de paquetes de software.

Este desarrollo se hizo en una estación de trabajo corriendo Linux Fedora 31.

Para el front-end en ReactJS necesitará tener instalados:

        NodeJS version v12.16.1 y el gestor de paquetes npm version 6.13.4.

Para la base de datos necesitará sqlite 3, y, para acceder a la misma, con una herramienta de gestion; se recomienda “DB Browser for SQLite”.

Opcionalmente, instale algún software para probar la Api; como por ejemplo "Postman". El mismo dispone de opciones muy potentes a la hora de efectuar pruebas.

Por último; debe disponer de un navegador web como Chrome o Mozilla para levantar el front del aplicativo.


### Instalación 🔧

Ya con el repositorio en nuestro ambiente local, se necesitará acceder a las carpetas del mismo para ejecutar los comandos necesarios, con el fin de poner a correr tanto la api, como el front-end. 

Se podrá acceder ya sea desde una ventana de un terminal o simbolo de sistema; o mediante el editor de Visual Studio Code (haciendo uso de su ventana de terminal integrado), en el caso de que se esté analizando el código.

Parados en el directorio del proyecto cambiamos al directorio conteniendo la Api

$ cd todos-api

A continuación ejecutar el comando:

[todos-api]$ dotnet restore

Esto es para garantizar que todos los paquetes necesarios estén disponibles.

Luego escriba:

[todos-api]$ dotnet run

Esto lanzará la ejecución de la Api:

      info: Microsoft.Hosting.Lifetime[0]
            Now listening on: http://localhost:5000
      info: Microsoft.Hosting.Lifetime[0]
            Application started. Press Ctrl+C to shut down.
      info: Microsoft.Hosting.Lifetime[0]
            Hosting environment: Development
      info: Microsoft.Hosting.Lifetime[0]
            Content root path: /home/user/Documentos/todos-project/todos-api

Se observa que la Api queda escuchando requests en el puerto 5000 del servidor de desarrollo Kestrel de asp.net core. A partir de aqui, ya se pueden enviar peticiones. Las mismas se pueden efectuar mediante la herramienta "Postman" o alguna otra similar.

Para consumir los servicios de la Api mediante el front-end es necesario que lancemos el servidor de desarrollo de nodejs. Para lo cual debemos cambiar al directorio del front-end

[todos-api]$ cd ..

[todos-project]$ cd todos-front

Importante: antes que nada se debe ejecutar un comando para garantizar que todos los paquetes del proyecto reactjs estén instalados:

[todos-front]$ npm i

esto instalará, en caso de ser necesario, los paquetes de dependencias que necesita el proyecto.

Una vez finalizado el paso anterior, lanzamos el servidor de desarrollo

[todos-front]$ npm start

      Compiled successfully!

      You can now view todos-front in the browser.

        Local:            http://localhost:3000
        On Your Network:  http://x.x.x.x:3000

      Note that the development build is not optimized.
      To create a production build, use npm run build.

Posterior a esto, se nos abrirá el navegador por defecto de nuestro sistema; en el cual se desplegará el front-end.

Ingresamos, a continuación de la dirección local, el route al dashboard del front-end:

    http://localhost:3000/todos


Ya en la pantalla principal del sistema, se visualizarán todas las tareas pendientes de resolver.
Se dispone de un filtro (combo con opciones de búsqueda) que nos permite visualizar las tareas según un determinado criterio. Este filtro es dinámico; es decir, que, los resultados se obtienen "al vuelo" mientras se seleccionan opciones o se escriben las búsquedas.

También se cuenta con la función de dar de alta una nueva tarea (presionando el boton a tal efecto) la cual nos envía a una página que nos permite ingresar los campos de una tarea; además de asociarle un archivo/foto a la misma. Una vez, dada de alta la nueva tarea (y luego de confirmar el alert emergente), se regresa automáticamente a la vista del dashboard de tareas. 

El cambio de estado de una tarea, se realiza en el dashboard; dando click en el combo perteneciente a la tarea que se va a dar por resuelta.

El archivo asociado a la tarea se sube a la carpeta Uploads del directorio de proyecto.


## Construido con 🛠️

* Editor de código Visual Studio Code - V.1.42.1
* Postman v3.1.8-postman.5 (usado para probar la Api)
* DB Browser for SQLite - Version 3.11.2 (usado para gestionar la base de datos sqlite)


## Versionado 📌

Usando Git version 2.24.1.


## Autores ✒️

* **Martin Enrique Bertello** - *Trabajo Inicial y documentación* 
                              - [mbertello](https://github.com/mbertello)


---
⌨️ con ❤️ por [mbertello](https://github.com/mbertello) 😊
