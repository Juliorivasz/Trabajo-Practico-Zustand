# 🚀 TaskForge: Administrador de Tareas Moderno

TaskForge es una aplicación de gestión de tareas elegante e intuitiva, diseñada para ayudarte a mantenerte organizado y productivo. Construida con React y enfocada en un diseño limpio y moderno, ofrece una experiencia fluida para administrar tus tareas diarias.

## ✨ Características

  * **Creación de Nuevas Tareas:** Añade fácilmente nuevas tareas con título, descripción y fecha límite utilizando un formulario modal profesional y animado.
  * **Edición de Tareas Existentes:** Actualiza los detalles de tus tareas a través de una experiencia de edición intuitiva, manteniendo tu información al día.
  * **Eliminación de Tareas:** Elimina tareas completadas o no deseadas con una confirmación clara.
  * **Diseño Adaptativo (Responsive):** Disfruta de una experiencia consistente y atractiva en varios dispositivos, desde ordenadores de escritorio hasta teléfonos móviles.
  * **Interfaz de Usuario Moderna:** Incorpora animaciones suaves, sombras sutiles y un diseño limpio para una experiencia de usuario agradable.
  * **Gestión de Estado del Lado del Cliente:** Utiliza una solución de gestión de estado ligera (Zustand, según tu uso de `tareaStore`) para un manejo eficiente de los datos.

## 🛠️ Tecnologías Utilizadas

  * **React:** La biblioteca principal de JavaScript para construir interfaces de usuario.
  * **CSS Modules:** Para un estilo modular y con alcance, previniendo conflictos de estilos.
  * **Zustand:** Una solución de gestión de estado pequeña, rápida y escalable (implícito por el uso de `tareaStore`).
  * **TypeScript:** Para seguridad de tipos y mejora de la calidad del código.

## 🚀 Empezando

Sigue estos pasos para poner TaskForge en marcha en tu máquina local.

### Requisitos Previos

Asegúrate de tener Node.js y npm (o yarn) instalados.

  * Node.js: [https://nodejs.org/](https://nodejs.org/)
  * npm: (Viene con Node.js)
  * Yarn (Opcional): `npm install -g yarn`

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone [url-de-tu-repositorio]
    cd [carpeta-de-tu-proyecto]
    ```
2.  **Instala las dependencias:**
    ```bash
    npm install
    # o
    yarn install
    ```

### Ejecutar la Aplicación

Para iniciar el servidor de desarrollo:

```bash
npm start
# o
yarn start
```

La aplicación se abrirá en tu navegador en `http://localhost:3000` (o una dirección similar).

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── CardList/          # Componente de tarjeta de tarea individual
│   │   ├── CardList.tsx
│   │   └── CardList.module.css
│   ├── Modal/             # Componente de modal para creación/edición de tareas
│   │   ├── Modal.tsx
│   │   └── Modal.module.css
│   └── ListTareas/        # Componente principal que muestra la lista de tareas
│       ├── ListTareas.tsx
│       └── ListTareas.module.css
├── hooks/
│   └── useTareas.ts       # Hook personalizado para lógica relacionada con tareas (ej. llamadas a API/manipulación de estado)
├── store/
│   └── tareaStore.ts      # Store de Zustand para el estado global de las tareas
├── types/
│   └── ITarea.ts          # Interfaces de TypeScript para los datos de las tareas
└── App.tsx                # Componente principal de la aplicación
└── index.tsx              # Punto de entrada de la aplicación React
└── ...
```

## 🎨 Filosofía de Estilo

La interfaz de usuario de TaskForge está diseñada con un enfoque en la estética moderna y la experiencia del usuario:

  * **Limpio y Minimalista:** Prioriza la legibilidad y la facilidad de uso con amplio espacio en blanco.
  * **Animaciones Sutiles:** Transiciones suaves y efectos al pasar el ratón (hover) proporcionan retroalimentación interactiva sin distraer.
  * **Elementos Consistentes:** Bordes redondeados, sombras y paletas de colores reutilizables crean un lenguaje visual cohesivo en todos los componentes.
  * **Grillas y Flexbox Adaptativos:** Asegura que el diseño se adapte elegantemente a diferentes tamaños de pantalla.
  * **Acciones Distintas:** Codificación de colores clara para acciones primarias (añadir, editar) y acciones destructivas (eliminar).
