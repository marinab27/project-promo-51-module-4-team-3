# 📌 Gestor de Proyectos 🚧

Una aplicación web desarrollada con **Node.js**, **Express** y **MySQL** que permite gestionar proyectos y autores bajo un esquema **MVC**. Ideal para mantener un registro organizado de trabajos, con la posibilidad de visualizarlos como en un escaparate digital 📸.

---

## 👁️ Conoce nuestro proyecto

Visita nuestro gestor de proyectos en:  
https://angelicagh.github.io/project-promo-51-module-3-team-3/

---

## 🚀 Características principales

- 📋 API REST para gestionar proyectos y autores
- 🛠️ Arquitectura **Modelo-Vista-Controlador (MVC)**
- 🌐 Vistas dinámicas con **EJS**
- 💾 Base de datos MySQL para almacenar toda la información
- 📤 Endpoint para añadir autor y proyecto en una sola solicitud
- 📑 Listado y detalle de proyectos
- 🎨 Estilos personalizados en **CSS**
- 🔄 Endpoints JSON para integraciones con frontend
- 📱 Diseño responsive y adaptable

---

## 🛠️ Tecnologías utilizadas

- 🌐 **Node.js**
- ⚡ **Express**
- 🗄️ **MySQL** (mysql2)
- 🖼 **EJS**
- 🌍 **CORS**
- 🔒 **dotenv**
- 🎨 **CSS**

---

## 📦 Instalación y uso

### 1️⃣ Clonar el repositorio

```bash
git clone <https://github.com/marinab27/project-promo-51-module-4-team-3.git>

### 2️⃣ Instalar dependencias

npm install

3️⃣ Configurar variables de entorno

Crear un archivo .env en la raíz con el siguiente contenido:

PORT=4000
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_base_datos
DB_PORT=3306

4️⃣ Importar la base de datos

Ejecutar los scripts en /sql (tablas.sql, datos.sql, CRUD.sql) en tu servidor MySQL.


5️⃣ Ejecutar la aplicación

npm start


📌 Endpoints principales

    GET /project/list → Lista todos los proyectos
    GET /project/detail/:id → Muestra un proyecto específico
    POST /project/add → Añade un autor y su proyecto



📜 Licencia

Este proyecto está bajo licencia MIT. Puedes usarlo y modificarlo libremente.
```
