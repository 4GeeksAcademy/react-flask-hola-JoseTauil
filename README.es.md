# Proyecto: Creando Tus Requisitos de Producto con IA 🚀

¡Bienvenido al proyecto **"Creando Tus Requisitos de Producto con IA"**! 👋 Este proyecto está diseñado para poner la teoría en práctica y construir una base sólida para el desarrollo de productos utilizando el poder de la Inteligencia Artificial y el enfoque **Vibe Coding**.

---

## 🎯 Información del Proyecto Académico

### Objetivo del Proyecto
Al completar este repositorio, se habrán alcanzado los siguientes hitos:
*   Un **Planificador de Producto MVP** completado para una idea de producto real.
*   Un **documento de requisitos de MVP (PRD)** generado por IA y adaptado al proyecto.
*   **Experiencia práctica** en la creación y refinamiento de prompts de IA aplicados a la gestión de productos.

### Habilidades Adquiridas
*   **Aplicación Práctica de IA:** Uso de modelos de lenguaje para agilizar la planificación.
*   **Definición del Alcance de MVP:** Capacidad de destilar ideas complejas en características esenciales.
*   **Ingeniería de Prompts:** Elaboración de instrucciones estructuradas para obtener resultados útiles.
*   **Evaluación Crítica:** Análisis y refinamiento de contenido generado por IA.

---

## 🏆 PROYECTO DESARROLLADO: "FanZone Mundial"

A continuación se presenta el desarrollo completo de la aplicación, planificado y estructurado mediante asistencia de Inteligencia Artificial.

### 📋 ENTREGABLE 1: Planificador de Producto MVP

*   **Idea del Producto:** Una plataforma web interactiva donde los aficionados del fútbol pueden consultar los grupos del Mundial mediante un carrusel dinámico y debatir en vivo a través de un mini-foro integrado.
*   **Propuesta de Valor Core:** Unificar en un solo lugar la consulta rápida de datos del torneo y la interacción social en tiempo real, evitando que el usuario disperse su atención en múltiples aplicaciones.
*   **Características Clave (In Scope):**
    *   [x] **Carrusel Dinámico:** Navegación horizontal entre los grupos (A-H) mostrando tablas de posiciones y partidos.
    *   [x] **Autenticación Básica:** Registro e inicio de sesión seguro con correo, contraseña y *username* único.
    *   [x] **Mini-Foro:** Chat público integrado debajo del carrusel con actualización de mensajes al instante.
*   **Fuera de Alcance (Out of Scope - Futuras Fases):**
    *   ❌ Sistema de pronósticos, quinielas o apuestas deportivas.
    *   ❌ Perfiles avanzados de usuario con avatares o sistema de medallas.
    *   ❌ Moderación automatizada de comentarios basada en IA.

---

### 📄 ENTREGABLE 2: Documento de Requisitos del Producto (PRD)

#### 1. Historias de Usuario (User Stories)

> ⚽ **Historia 1: Visualización del Torneo**
> * **Como** aficionado al fútbol,
> * **quiero** interactuar con un carrusel dinámico que muestre los grupos del Mundial,
> * **para** consultar rápidamente los partidos y la tabla de posiciones.

> 💬 **Historia 2: Interacción Social**
> * **Como** usuario autenticado,
> * **quiero** enviar mensajes en el foro de discusión en tiempo real,
> * **para** debatir y compartir mis reacciones en vivo con otros usuarios.

> 🔑 **Historia 3: Gestión de Identidad**
> * **Como** usuario nuevo,
> * **quiero** registrar una cuenta con un nombre de usuario único,
> * **para** que mis aportaciones en el foro aparezcan identificadas correctamente.

#### 2. Requisitos Técnicos Principales
*   **Funcional (RF):** El sistema debe validar que los mensajes del foro contengan texto plano (máx. 280 caracteres) y renderizarlos de forma cronológica descendente.
*   **No Funcional (RNF):** La distribución de los mensajes en el foro a los clientes conectados debe realizarse en un tiempo menor a 500ms (Tiempo Real). La interfaz debe ser completamente responsiva (*Mobile-First*).

#### 3. Stack Tecnológico Sugerido

| Capa | Tecnología | Razón de Selección |
| :--- | :--- | :--- |
| **Frontend** | React.js | Excelente manejo de estados dinámicos para el carrusel y el chat interactivo. |
| **Backend** | Python (FastAPI / Flask) | Ligero, rápido y con soporte óptimo para conexiones asíncronas. |
| **Base de Datos**| PostgreSQL | Estructura relacional robusta para asegurar la integridad de usuarios y mensajes. |

---

## 🤖 Ingeniería de Prompts Utilizada

Para generar este documento de requisitos, se utilizó un prompt estructurado definiendo un rol experto a la IA:

```text
"Actúa como un Product Manager Senior experto en metodologías ágiles. Estoy haciendo un proyecto para 4Geeks Academy donde debo definir los requisitos de un MVP asistido por IA. Mi idea es una Aplicación Web para el Mundial de Fútbol con un carrusel interactivo y un foro en tiempo real. Genera el alcance del MVP, lo que queda fuera, 3 historias de usuario y un tech stack sugerido."

