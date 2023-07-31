# Descripción del Proyecto

Este proyecto tiene como objetivo calcular el valor de cuota de una simulación de crédito desarrollado con Angular y NestJS, donde en esta primera parte solo se encuentra el desarrollo backend. La aplicación permite a los usuarios ingresar datos a través de un formulario en la interfaz de usuario, enviar esos datos al backend construido con NestJS, realizar un cálculo basado en los datos proporcionados y finalmente mostrar el resultado al usuario en pantalla. Además, los resultados se guardan en una base de datos creada en MySql para su posterior consulta.

* En este repositorio solo se encuentra el desarrollo del backend. 

## Características principales proyecto completo

* Interfaz de usuario amigable con un formulario para ingresar datos.
* Backend construido con NestJS para realizar cálculos y gestionar la persistencia de datos.
* Comunicación segura entre el frontend y el backend a través de API RESTful.
* Almacenamiento de resultados en una base de datos para su posterior consulta y referencia.

## Instalación y Ejecución 

* Clonar este repositorio: git clone https://github.com/tu-usuario/tu-proyecto.git
* Navegar al directorio del backend: cd tu-proyecto/backend
* Instalar las dependencias: npm install
* Configura la conexión a la base de datos en tu-proyecto/src/app.module.ts.

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
Inicia el backend: npm run start:dev
El backend estará disponible en http://localhost:3000.

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
