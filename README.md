# express-authentication

---

> Crea fácilmente la configuración de cors, permisos, proteccion contra fuerza bruta, activación de usuarios por email, recuperación automatica de contraseña y login [manejo de usuarios] para una aplicación.

## Instalación

`npm i @codice-progressio/express-authentication`

## Uso

Los valores requeridos para que funcionen son los siguientes:

```javascript
//SEGURIDAD --------------------------------------

//Llamamos la libreria.
const codice_security = require("./index.js")
//Establecemos las configuraciones de easy-permissions
codice_security.configuraciones.easy_permissions.config({
  // Para mejor rendimiento establecer en false
  generarPermisos: true,
  // En modo producción no se generan permisos
  modoProduccion: false,
  //Definimos el path para la ruta donde se creara la carpeta
  // y los ficheros de permisos
  path: require("path").resolve(__dirname).concat("/"),
})
// Definimos el modo debugs para este demo
codice_security.configuraciones.debug = true
// Usamos la configuracion por defecto de cors, pero
// siempre la podemos sobreescribir. (TODO: Completar todas las opciones)
codice_security.configuraciones.cors.origin = process.env.ORIGIN
//TOKEN
codice_security.configuraciones.jwt.private_key = process.env.PRIVATE_KEY

//  CORREO
codice_security.configuraciones.correo.dominio = process.env.CORREO_DOMINIO
codice_security.configuraciones.correo.dominio_recuperacion =
  process.env.CORREO_DOMINIO_RECUPERACION
codice_security.configuraciones.correo.nombre_aplicacion =
  process.env.CORREO_NOMBRE_APLICACION
codice_security.configuraciones.correo.transport.host =
  process.env.CORREO_TRANSPORT_HOST
codice_security.configuraciones.correo.transport.port =
  process.env.CORREO_TRANSPORT_PORT
codice_security.configuraciones.correo.transport.auth.user =
  process.env.CORREO_TRANSPORT_AUTH_USER
codice_security.configuraciones.correo.transport.auth.pass =
  process.env.CORREO_TRANSPORT_AUTH_PASS

codice_security.configuraciones.correo.mailOptions.from =
  process.env.CORREO_MAILOPTIONS_FROM

//Llamamos la configuracion de configuracion
app.use(codice_security.basico())

//SEGURIDAD FIN ----------------------------------

//Es necesario que se haga de esta manera para no tener problemas con las configuraciones de easy-permissions.
const routes = require("routes")
app.use(routes)

//Disfrutamos de la vida...
```

## Opciones disponibles

```javascript
const configuraciones = {
  ruta_usuario: "/usuario",
  cors: {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  },
  debug: false,
  jwt: {
    private_key: undefined,
    //Expresado en segundos
    expiresIn: 3600,
    decode: {
      unless:[
        "/usuario/login",
        "/usuario/crear-administrador",
        "/usuario/confirmar",
        "/usuario/recuperar-password-email",
        "/usuario/generar-link-recuperar-password",
      ],
      /*
      Es posible que desee utilizar este módulo para identificar a los usuarios 
      registrados y, al mismo tiempo, brindar acceso a los usuarios no 
      registrados.Puede hacer esto usando la opción credentialsRequired:
      */
      credentialsRequired: true,
      requestProperty: "user",
    },
  },

  validaciones: {
    jwt: validarJwt,
    errores: { jwt: validaciones },
  },
  usuario: {
    nombre_bd: "Usuario",
    schema: {
      nombre: { type: String, min: 4 },
      email: {
        type: String,
        unique: true,
        required: [true, "El correo es necesario."],
      },
      password: {
        type: String,
        required: [true, "La contraseña es necesaria."],
        select: false,
        min: 8,
      },
      permissions: {
        type: [String],
        select: false,
      },
      inhabilitado: { type: Boolean, default: false },
      email_validado: {
        type: {
          codigo: String,
          validado: { type: Boolean, default: false },
          recuperar_contrasena: { type: Boolean, default: false },
          intentos: { type: Number, default: 0 },
          intento_hora: Date,
          bloqueado: { default: false, type: Boolean },
        },
        select: false,
      },
    },
  },

  correo: {
    transport: {
      host: undefined,
      port: undefined,
      auth: {
        user: "",
        pass: "",
      },
    },
    mailOptions: {
      from: undefined,
    },
    dominio: undefined,
    dominio_recuperacion: undefined,
    nombre_aplicacion: undefined,
  },

  permisos: {
    leer_todo: {
      permiso: "usuario:leer:todo",
      descripcion: "Leer todos los usuarios registrados en el sistema. ",
    },

    login: {
      permiso: "login",
      descripcion: "Iniciar sesión en el sistema",
    },
    crear_usuario: {
      permiso: "usuario:crear",
      descripcion: "Crear un nuevo usuario",
    },

    agregar_permiso: {
      permiso: "usuario:modificar:agregar-permiso",
      descripcion: "Crea un nuevo permiso al usuario",
    },

    eliminar_permiso: {
      permiso: "usuario:modificar:eliminar-permiso",
      descripcion: "Elimina un permiso del usuario",
    },

    inhabilitar_usuario: {
      permiso: "usuario:modificar:inhabilitar",
      descripcion: "Deshabilita al usuario ",
    },

    administrador: {
      permiso: "administrador",
      descripcion: "Permisos de administrador",
    },
  },

  easy_permissions: require("@codice-progressio/easy-permissions"),
  easy_permissions_path: {
    fichero_permiso_descripcion: () => obtenerPathFicheroPermisos(""),
    fichero_permiso_permiso: () => obtenerPathFicheroPermisos("_"),
  },
};
```
