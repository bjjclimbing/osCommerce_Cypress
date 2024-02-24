# Cypress e-commerce testing

Este proyecto utiliza Cypress para realizar pruebas automatizadas en un sitio web de comercio electrónico.

## Requisitos

- Node.js instalado en tu sistema.
- Cypress instalado de forma global o local en el proyecto.

## Instalación

1. Clona este repositorio en tu máquina local:

git clone git@github.com:bjjclimbing/osCommerce_Cypress.git

2. Instala las dependencias del proyecto:

npm install


## Configuración

1. Modifica los archivos de fixtures en el directorio `cypress/fixtures`. En este directorio se encuentra el fichero items.json en el cual Puedes incluir datos de los productos a probar; el fichero shippinginfo.json contiene la información de envío necesaria para completar la compra.

## Ejecución de las pruebas

Para ejecutar las pruebas, simplemente ejecuta el siguiente comando en tu terminal:

npx cypress run  --spec .\cypress\e2e\spec.cy.js