# Aplicación Web LOS CAPACHOS

Esta es la aplicación web completa para la discoteca LOS CAPACHOS, desarrollada con el stack MERN (MongoDB, Express, React, Node.js).

## Características

- **Frontend:**
  - Desarrollado con React y TypeScript.
  - Estilo "Glassmorphism" con una paleta de colores morados.
  - Diseño responsivo para dispositivos móviles, tablets y escritorio.
  - Secciones: Inicio, Ambientes, Menús, Servicios, Eventos, Contacto.
  - Funcionalidades: Reservas, Carrito de compras.
- **Backend:**
  - Desarrollado con Node.js y Express.
  - Base de datos MongoDB.
  - Autenticación de usuarios con JWT.
  - Arquitectura modular (controladores, modelos, rutas, servicios).
  - Panel de administración para gestionar el contenido.

## Instalación

### Prerrequisitos

- Node.js (v14 o superior)
- npm (v6 o superior)
- MongoDB

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/los-capachos.git
   cd los-capachos
   ```

2. **Instalar dependencias del backend:**
   ```bash
   cd backend
   npm install
   ```

3. **Instalar dependencias del frontend:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configurar variables de entorno:**
   - En la carpeta `backend`, crea un archivo `.env` a partir del `.env.example` y configúralo con tus propias credenciales.

## Uso

1. **Iniciar el servidor backend:**
   ```bash
   cd backend
   npm start
   ```

2. **Iniciar la aplicación frontend:**
   ```bash
   cd ../frontend
   npm start
   ```

La aplicación estará disponible en `http://localhost:3000`.
