# Descripción del Proyecto

Este proyecto tiene como objetivo calcular el valor de cuota de una simulación de crédito desarrollado con Angular y NestJS, donde en esta primera parte solo se encuentra el desarrollo backend. La aplicación permite a los usuarios ingresar datos a través de un formulario en la interfaz de usuario, enviar esos datos al backend construido con NestJS, realizar un cálculo basado en los datos proporcionados y finalmente mostrar el resultado al usuario en pantalla. Además, los resultados se guardan en una base de datos creada en MySql para su posterior consulta.

* En este repositorio solo se encuentra el desarrollo del backend. 

## Características principales proyecto completo

* Interfaz de usuario amigable con un formulario para ingresar datos.
* Backend construido con NestJS para realizar cálculos y gestionar la persistencia de datos.
* Comunicación segura entre el frontend y el backend a través de API RESTful.
* Almacenamiento de resultados en una base de datos para su posterior consulta y referencia.

## Instalación y Ejecución 

* Clonar este repositorio: `git clone  https://github.com/GerardoEgR/crudBackendNestjs.git`
* Navegar al directorio del backend: cd tu-proyecto/backend
* Instalar las dependencias: npm install
* Configurar la conexión a la base de datos en tu-proyecto/src/app.module.ts.
```bash
# BD connection 
type: 'mysql',
host: 'localhost',
port: 3306,
username: 'root',
password: 'admin',
database: 'db_credito',
entities: [__dirname + '/**/*.entity{.ts,.js}'],
synchronize: true,
```
* Crear la Base de Datos en MySql: 
```bash
# Creación DB 
CREATE DATABASE db_credito;

# Creación Tabla TRX_LOG
CREATE TABLE TRX_LOG(
id_TRX int auto_increment primary key,
fecha_TRX timestamp  not null,
json_TRX varchar(255) not null
);
```

* Iniciar el backend: 
```bash
# Inicio en entorno de dasarrollo
$ npm run start:dev
```

El backend estará disponible en `http://localhost:3000`.

## Uso

* Abre tu navegador web y accede a `http://localhost:4200/`.
* Completa el formulario con los datos requeridos.
* Haz clic en el botón "Enviar Consulta" para enviar los datos al backend.
* El backend realizará el cálculo y almacenará el resultado en la base de datos.
* El resultado se mostrará en pantalla para que el usuario lo vea.

## Tecnologías Utilizadas

* Angular: Framework de desarrollo de aplicaciones web del lado del cliente.
* NestJS: Framework de desarrollo de aplicaciones backend con Node.js.
* MySQL: Base de datos relacional para almacenar los resultados.
