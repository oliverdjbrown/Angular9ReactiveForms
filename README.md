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

