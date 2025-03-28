# Gestor de Tareas con React

[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-orange)](https://vitejs.dev/)
[![Licencia](https://img.shields.io/badge/Licencia-MIT-green)](LICENSE)

Aplicación para gestionar tareas con funcionalidad CRUD completa, persistencia de datos y sistema de ordenación.

## 🚀 Características principales

- **Gestión completa** de tareas (Crear, Leer, Actualizar, Eliminar)
- Campos para **nombre** y **descripción** de cada tarea
- **Persistencia automática** en el navegador (localStorage)
- **Ordenación** por nombre, descripción o fecha de creación
- **Paginación** para mejor visualización
- **Diseño responsive** que se adapta a cualquier dispositivo

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia la aplicación:

```bash
npm run dev
```

## 🛠️ Scripts útiles

| Comando           | Descripción                             |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo        |
| `npm run build`   | Compila para producción                 |
| `npm run lint`    | Ejecuta ESLint para verificar el código |
| `npm run preview` | Previsualiza el build de producción     |

## 🧩 Componentes principales

- **App.jsx**:

  - Gestiona el estado global
  - Maneja la lógica principal
  - Coordina los demás componentes

- **TareaForm.jsx**:

  - Formulario interactivo
  - Validación de campos
  - Modo edición/creación

- **ListarTareas.jsx**:
  - Tabla de tareas
  - Paginación automática
  - Sistema de ordenación
