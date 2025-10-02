# Proyecto: ASTROMAP - El Cielo en tus Manos ✨

## Resumen del Proyecto

ASTROMAP es una aplicación móvil desarrollada en Flutter que permite a los usuarios crear un mapa estelar personalizado de un momento y lugar específicos. La aplicación genera una representación visual precisa de cómo estaban alineadas las estrellas y constelaciones en una fecha y ubicación determinadas, ofreciendo un recuerdo único y personal de eventos importantes como cumpleaños, aniversarios o cualquier otro momento especial.

## Mi Rol en el Proyecto 👨‍💻

Desarrollador Flutter, encargado del diseño de la interfaz, la integración con la API de datos astronómicos y la implementación de la lógica de negocio para la generación de los mapas estelares, utilizando Provider como gestor de estado.

## El Problema a Resolver 🎯

Las personas a menudo buscan regalos y recuerdos significativos que capturen la esencia de un momento especial. Los mapas estelares son una opción popular, pero las herramientas existentes pueden ser inaccesibles, costosas o estar limitadas a sitios web. Hacía falta una aplicación móvil intuitiva y rápida que permitiera a cualquiera generar y visualizar su propio mapa del cielo desde la palma de su mano.

## La Solución Implementada ✅

ASTROMAP ofrece una experiencia de usuario fluida y directa. Con solo introducir tres datos clave (fecha, hora y ubicación), la aplicación se conecta a una API astronómica para obtener los datos precisos y renderiza un mapa estelar visualmente atractivo y científicamente exacto de ese instante en el tiempo.

## Características Principales y Funcionalidades Desarrolladas 💡

- Selección Precisa de Fecha, Hora y Ubicación 📅: Se implementaron selectores nativos e intuitivos para que el usuario pueda introducir fácilmente los datos del momento que desea conmemorar. Se integró un buscador de ubicaciones para garantizar la precisión geográfica.

- Generación Dinámica del Mapa Estelar 🌌: El núcleo de la aplicación es su capacidad para procesar los datos astronómicos recibidos de la API y dibujar en un lienzo (Canvas) las estrellas y constelaciones correspondientes a las coordenadas y el tiempo proporcionados.

- Integración con API Astronómica Externa 🛰️: La aplicación no utiliza una base de datos local para los datos celestes. En su lugar, realiza llamadas a una API especializada en tiempo real, asegurando que la información sea siempre precisa y actualizada sin sobrecargar la aplicación.

- Gestión de Estado Eficiente con Provider ⚙️: Se utilizó el paquete Provider para la gestión del estado de la aplicación, manejando de forma limpia la comunicación entre la entrada del usuario, la llamada a la API y la actualización de la interfaz de usuario que muestra el mapa.

## Tecnologías Utilizadas 💻

- Framework: Flutter y Dart
- Gestión de Estado: Provider
- Base de Datos: No aplica (consumo de API)
- API: [Astromap.app]
- Otros: Git para control de versiones
