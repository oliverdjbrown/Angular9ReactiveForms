# AngularReactiveForms
Este es un proyecto de Angular 9 construido unicamente para probar las caracteristicas que destacan este framework y tener un recordatorio a mano de todo lo que se puede hacer con el.

## Reactive Forms
Los formularios reactivos proporcionan un enfoque basado en modelos para manejar entradas de formulario cuyos valores cambian con el tiempo. Esta guía le muestra cómo crear y actualizar un control de formulario básico, avanzar al uso de controles múltiples en un grupo, validar valores de formulario y crear formularios dinámicos donde puede agregar o quitar controles en tiempo de ejecución.

La logica del codigo se encuentra en la clase de nuestro componente, no hay two way binding, esta mejor situado para escenarios complejos como por ejemplo campos dinamicos en el formulario, validaciones personalizadas, validaciones dinamicas, permite pruebas unitarias por estar delado de las clase.

## Adding form HTML
Los formularios estan compuestos de diferentes controles, para esta practica crearemos un formulario para el registro de usuario con 3 inputs.

## Creating the Form Model
El formulario es representado por un modelo en la clase de nuestro componente, para esto usaremos formgroup y las clases en nuestro control.

1) importaremos ReactiveFormsModule en nuestro archivo app.module.ts y lo agregamos a nuestro arreglo de modulos.
2) importaremos FromGroup en nuestro componente .ts y declaramos nuestra propiedad y especificamos las propiedades como parametro de nuestro constructor.
3) en la vista de nuestro componente asociamos formgroup a nuestro formulario y sera igual a nuestra propiedad declarada para manejar los campos.
4) por ultimo utilizaremos la interpolacion para mostrar los valores de registrationForm y utilizaremos jsonPipe.

## Nesting Form Groups
Podemos hacer que formularios muy grandes esten divididos por secciones lo que es mas facil de manejar

1) dentro del formulario ya creado "registrationForm" agregaremos una seccion utilizando un div tag y luego creando 3 nuevos inputs.
2) en nuestra propiedad "registrationForm" de nuestro componente .ts crearemos un nuevo grupo llamado address especificando sus parametros.
3) al divtag de nuestro div en la vista agregamos que formGroupName sera igual a address.

## Managing Control Values
veremos la diferencia entre establecer a una propiedad setvalue el cual es estricto porque no se deben especificar todos los valores, patchvalue por el contrario es mas flexible permitiendo algunos valores.

1) crearemos un boton en nustra vista el cual llamara nuestro metodo "loadApiData".
2) dentro de nuestro metodo estableceremos todos los valores que tendra nuestra propiedad registrationForm por medio de setvalue.
3) crearemos otro metodo llamado loadApiData2 el cual solo establecera algunos de los valores de nuestra propiedad por medio de patchvalue el cual es flexible.

## FormBuilder Service
FormBuilder proporciona azúcar sintáctico que acorta la creación de instancias de un FormControl, FormGroup o FormArray. Reduce la cantidad de repeticiones necesarias para construir formas complejas.

1) dentro de nuestro componente .ts importamos formbuilder.
2) lo injectamos en nuestro constructor. 
3) declaramos la propiedad "registrationForm" que sera igual a la propiedad injectada en nuestro constructor y la cual le pasaremos los parametros.

## Simple Validation
En un formulario reactivo, la fuente de la verdad es la clase componente. En lugar de agregar validadores a través de atributos en la plantilla, agrega funciones de validación directamente al modelo de control de formulario en la clase de componente. Angular llama a estas funciones cada vez que cambia el valor del control.

1) importamos al principio de nuestro componente 'Validators'.
2) utilisaremos Validators.required para especificar que es una validacion requerida.
3) en nuestra vista agregamos una clase de bootstrap para la validacion visual y en que casos esta debe reaccionar.
4) utilizando validaciones dentro de la etiqueta small y por medio del propertybinding de la la clase de bootstrap podemos mostrar un mensaje especificando los casos
5) para hacer mas de una validacion en el campo del formulario procedemos a utilizar un arreglo en el formulario (componente ts) y especificar las validaciones.
6) por ultimo utilizando la directiva ngif podemos hacer que se muestren mensajes dependiendo de la condicion.

## Custom Validation
Cuando se utilizan formularios reactivos en angular, es muy fácil definir validadores personalizados, ya que no son más que funciones regulares. Puede crear la función para su validador personalizado dentro de su archivo de componente directamente si el validador no se usará en otro lugar, pero aquí asumiremos la reutilización y crearemos un validador en un archivo separado.

1) creamos un archivo  user-name.validator.TS en el cual escribiremos nuestra funcion.
2) importamos AbstractControl.
3) creamos nuestra funcion con nuestros parametros para la validacion del campo la cual validara que el usuario no se llame "admin".
4) nuestra funcion debe ser exportada para asi poder invocarla.
5) en nuestro componente Ts del formulario agregamos nuestra funcion creada para validar en el arreglo de validaciones del campo userName.
6) importamos el componente ts que posee la validacion.
7) aplicamos una condicion en nuestro archivo html que valide el campo.
8) para poder crear una funcion que valide varios parametros, refactorizamos nuestra funcion de tal forma que acepte los parametros que le pasemos directamente desde nuestro componente ts.

## Cross Field Validation
nos permite hacer validaciones de varios campos a la vez como por ejemplo validar si los campos de contraseña coinciden.

1) creamos un archivo  password.validator.TS en el cual escribiremos nuestra funcion.
2) importamos AbstractControl.
3) creamos nuestra funcion con nuestros parametros para la validacion de los campos password y confirmPassowrd, esta funcion validara que los campos no esten vacios y que ambos sean iguales.
4) nuestra validacion se debe colocar en el formGrop.
5) En nuestra vista dentro de nuestro input de conform Password aplicaremos la clase de bootstrap que validara si se cumplen nuestras condiciones y mostrara un aviso.
6) por ultimo mejoraremos nuestra funcion validando que el mensaje se muestre solo si ambos campos tienen texto.

## Conditional Validation 
nos permite hacer validaciones dinamicas lo que quiere decir que se aplicaran solo bajo ciertas circunstancias.

1) agregaremos en nuestra vista html un campo para email y un checkbox.
2) en nuestro componente .ts agregamos a nuestro formbuilder email y el checkbox.
3) movemos nuestro codigo del formulario a el metodo de inicio ngOnInit pero antes declarando fuera la propiedad.
4) agregamos un metodo observable dentro del metetodo ngOnInit que valide si el checkbox esta activo y validara o no de acuerodo a eso.
5) agregagmos un metodo get que consiga el valor del email en nuestro formulario.
6) en nuestra vista html, agregamos la validacion de la clase bootstrap y en vase al resultado mostrara nuestra etiqueta smart.
