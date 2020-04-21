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