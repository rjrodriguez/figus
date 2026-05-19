# 🏆 Figus Manager (Álbum Mundial 2026)

Figus Manager es una aplicación web progresiva (PWA) diseñada para ayudar a los coleccionistas a llevar un control preciso de sus figuritas del Álbum del Mundial 2026.

## ✨ Características

- **Gestión de Colección**: Marca fácilmente qué figuritas tienes, cuáles te faltan y cuáles tienes repetidas.
- **Dashboard de Progreso**: Visualiza tu avance con un indicador circular interactivo y estadísticas detalladas de tu colección.
- **Búsqueda y Filtros**: Encuentra países o figuritas específicas en tiempo real. Oculta las figuritas que ya tienes para enfocarte en las que te faltan.
- **Intercambio Fácil**: Genera automáticamente listas de tus figuritas **Faltantes** o **Repetidas** para copiarlas al portapapeles o compartirlas directamente con amigos por WhatsApp y otras redes.
- **Modo Offline (PWA)**: Instala la aplicación en tu dispositivo móvil y accede a tu lista sin conexión a internet. Los datos se guardan localmente en tu dispositivo.

## 🚀 Tecnologías

Este proyecto está construido utilizando:

- **React 19**
- **Vite**
- **Tailwind CSS v4** (con plugins para utilidades avanzadas)
- **Lucide React** (para la iconografía)
- **Vite PWA Plugin** (para soporte offline e instalabilidad)

## 🛠 Instalación y Uso Local

Sigue estos pasos para correr el proyecto en tu entorno local:

1. **Clonar el repositorio** (o descargar el código fuente).
2. **Navegar a la carpeta del proyecto**:
   ```bash
   cd figus
   ```
3. **Instalar las dependencias**:
   ```bash
   npm install
   ```
4. **Ejecutar en modo de desarrollo**:
   ```bash
   npm run dev
   ```
5. Abre [http://localhost:5173](http://localhost:5173) en tu navegador web.

## 📦 Construcción para Producción

Para compilar la aplicación para producción:

```bash
npm run build
```
El resultado optimizado y minificado se generará en la carpeta `dist/`, listo para ser desplegado en cualquier servicio de hosting estático (Vercel, Netlify, GitHub Pages, etc.).

## 📝 Notas de Versión

- **v1.0**: Control básico, dashboard circular, filtros, y modal mejorado para compartir independientemente las figuritas faltantes y las repetidas.
