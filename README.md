# Next.js Vercel Template

Este es un proyecto base de Next.js optimizado para despliegue en Vercel.

## Características
- Estructura de carpetas estándar (`pages`, `components`, `public`, `styles`).
- Rutas dinámicas (`/posts/[id]`).
- API Routes (`/api/hello`).
- Optimización SEO básica.
- Configuración lista para Vercel.

## Comenzando

### 1. Instalación
Instala las dependencias necesarias:
```bash
npm install
```

### 2. Desarrollo
Inicia el servidor de desarrollo:
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 3. Producción
Para crear una versión de producción:
```bash
npm run build
```
Y para servirla:
```bash
npm run start
```

## Despliegue en Vercel

La forma más fácil de desplegar este proyecto es usando la [Plataforma Vercel](https://vercel.com/new):

1. Sube tu código a un repositorio de GitHub, GitLab o Bitbucket.
2. Importa el repositorio en Vercel.
3. Configura las variables de entorno si es necesario (basándote en `.env.example`).
4. ¡Listo! Vercel detectará automáticamente que es un proyecto de Next.js y hará el deploy.
