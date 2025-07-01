# 📅 Dayset

**Dayset** es una aplicación desarrollada en Flutter y web (Nx + Module Federation) que busca ayudarte a organizar y estructurar tus días de forma simple y efectiva. El enfoque está en la planificación diaria, rutinas, hábitos y metas personales.

---

## 🧭 Propósito del Proyecto

El objetivo de Dayset es crear una app intuitiva que permita:
- Planificar tareas diarias.
- Crear y seguir rutinas.
- Visualizar el progreso en metas personales.
- Registrar hábitos diarios.

---

## 🎯 Funcionalidades planeadas

- [ ] ✅ Agenda diaria con tareas y eventos.
- [ ] 🕓 Rutinas (por ejemplo: rutina de mañana, noche, gym).
- [ ] 📊 Seguimiento de hábitos.
- [ ] 🎯 Seguimiento de metas semanales o mensuales.
- [ ] 🔔 Recordatorios y notificaciones.
- [ ] 🧠 Alguna inteligencia para sugerencias de organización (en el futuro).

---

## 🛠️ Tecnologías

### 🧩 Mobile
- Flutter

### 🌐 Web
- Nx (monorepo)
- Module Federation para arquitectura por micro frontends
- Angular

### 📦 Compartido
- Diseño de UI unificado
- Compartición de modelos y lógica de negocio entre apps

---

## 🗂️ Estructura del Proyecto

| Carpeta   | Contenido                                                           |
|-----------|---------------------------------------------------------------------|
| `/apps`   | Aplicaciones principales (mobile, web, admin, etc.)                 |
| `/libs`   |  Web Components (Stencil), modelos, servicios, diseño compartido    |
| `/docs`   | Documentación técnica o diagramas futuros                           |

---

## 📍 Estado actual

> **Fecha de retomado:** 30 de junio de 2025  
Actualmente se está reactivando el desarrollo. Se avanza en paralelo en:
- 📱 **Flutter**: Funcionalidades básicas de tareas.
- 🌐 **Nx Web**: Estructura base del sitio web y primeros componentes.

**Próximo paso:** Definir MVP en ambas plataformas y construir UI funcional en la web.

---

## ✅ MVP (Producto Mínimo Viable)

### Móvil
- Pantalla de bienvenida
- Crear una tarea con fecha y hora
- Ver la lista del día
- Marcar tareas como completadas

### Web
- Landing page con información del proyecto
- Sección para ver tareas y añadir nuevas
- Base para micro frontends si es necesario

### 📦 Librerías compartidas (`/libs`)
- **Stencil**: para crear Web Components reutilizables en Flutter y web
- Modelos y lógica compartida
- Servicios comunes (por ejemplo: manejo de tareas, fecha, estado)


---

## ✍️ Notas personales

- Mantener el enfoque en **funcionalidad básica antes que diseño avanzado**.
- Evitar duplicar lógica entre móvil y web — usar librerías compartidas.
- Web: usar Nx para probar estructura escalable desde el inicio.
- No intentar hacer todo desde el inicio. Ir funcionalidad por funcionalidad.


---

## 🚀 Comandos útiles para desarrollo

### 📱 Flutter (mobile)

```bash
# Ejecutar la app Flutter en modo debug
flutter run

# Ejecutar pruebas
flutter test

# Formatear el código
flutter format .
```

### 🌐 Nx (web)

```bash
# Ejecutar toda la app
npm run serve

# Servir una app web (por ejemplo: shell)
npx nx serve 

# Servir con remotos (ejemplo con 'goals' y 'nav')
npx nx serve shell --devRemotes=goals,nav

# Generar una nueva app o lib MF
nx g @nx/angular:remote apps/home --host=shell

# Generar una nueva app 
npx nx g @nx/angular:app apps/nombre-app 

# Generar una nueva  lib 
nx g @nx/angular:lib libs/mf-contracts --standalone
npx nx g @nx/web:lib nombre-lib

# Ejecutar pruebas
npx nx test nombre-proyecto

# Linting
npx nx lint nombre-proyecto
```

### 🧩 Stencil (componentes en libs)

```bash
# Compilar componentes
npx nx build nombre-lib-stencil

# Servir en modo desarrollo
npx nx serve nombre-lib-stencil

# Ejecutar pruebas unitarias
npx nx test nombre-lib-stencil

# Generar un nuevo componente 
## probar se creo manualmente este proyecto porque no se tenia la version actualizada
npx nx g @nxext/stencil:component nombre-componente --project=nombre-lib-stencil
```

### 🧼 Otros

```bash

# Limpiar caché de Nx si es necesario
npx nx reset
```
