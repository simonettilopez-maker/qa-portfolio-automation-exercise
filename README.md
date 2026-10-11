# Proyecto de QA Automation & Testing - Automation Exercise

Repositorio oficial para el diseño, ejecución y automatización de pruebas sobre la plataforma **Automation Exercise**, desarrollado en el marco del Voluntariado Profesional de QA (Teclab).

---

## Estructura del Repositorio

* **`01-documentation/`**: Informe final (`.docx` / `.pdf`), Historias de Usuario (US-001 a US-004), matriz de casos de prueba (TC-001 a TC-005) y evidencias.
* **`02-api-testing/`**: Colección de pruebas de API en Postman (`AutomationExercise_API.postman_collection.json`) con las validaciones de endpoints y autenticación.
* **`03-database-sql/`**: Consultas de validación en base de datos (`database_queries.sql`) para trazabilidad de usuarios y registros.
* **`04-automation-playwright/`**: Scripts de automatización web con Playwright (`login.spec.js`) y archivos de configuración del proyecto.

---

## Tecnologías y Herramientas

* **Gestión y Pruebas Manuales:** Trello (Kanban), Excel, Word.
* **Pruebas de Backend (API):** Postman.
* **Base de Datos:** Consultas SQL.
* **Automatización Web:** Playwright, JavaScript, Node.js.

---

## Cómo ejecutar la automatización (Playwright)

1. Clonar el repositorio:
`git clone [https://github.com/simonettilopez-maker/qa-portfolio-automation-exercise.git](https://github.com/simonettilopez-maker/qa-portfolio-automation-exercise.git)`

2. Instalar dependencias de Node:
`npm install`

3. Ejecutar las pruebas automatizadas:
`npx playwright test`
