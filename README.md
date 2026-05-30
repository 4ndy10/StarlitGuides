# ✨ Starlit Guides

> Una aplicación compañera unificada, base de datos y planificador de recursos para el ecosistema de juegos de HoYoverse: **Genshin Impact**, **Honkai: Star Rail** y **Zenless Zone Zero**.

## 📖 Visión General
**Starlit Guides** nace de la necesidad de centralizar la experiencia de los jugadores de HoYoverse. En lugar de depender de múltiples herramientas aisladas o wikis pesadas, este proyecto busca fusionar la capacidad de lectura de datos en vivo (perfiles de jugador) con una enciclopedia estática robusta y calculadoras de progresión, todo bajo una misma interfaz moderna y multiplataforma.

## 🚀 Características Principales (En Desarrollo)

El proyecto está diseñado bajo una arquitectura modular que se divide en tres pilares funcionales para cada juego:

* **🔍 El Escaparate (Live Data):** Sincronización mediante API (vía *Enka.network*) para visualizar en tiempo real las estadísticas, equipamiento, artefactos/reliquias y métricas de los personajes del usuario.
* **📚 La Biblioteca (Base de Datos Estática):** Un compendio detallado offline-first con la información de todos los personajes, armas, conos de luz, amplificadores y materiales de ascensión.
* **🧮 Planificador de Recursos:** Calculadoras inteligentes que cruzan el inventario actual del usuario con sus metas (ej. subir un personaje al nivel 90), generando listas exactas de farmeo diario y optimización de resina/poder/batería.

## 🏗️ Arquitectura Técnica y "Diccionario Universal"

El mayor reto técnico que resuelve **Starlit Guides** es la normalización de sistemas paralelos entre tres juegos distintos. Para garantizar la escalabilidad, el motor de la base de datos utiliza un **Diccionario Universal** basado en NoSQL.

En lugar de crear bases de datos redundantes, la aplicación mapea los conceptos mediante variables abstractas. La interfaz gráfica se encarga de la traducción visual dependiendo del entorno activo:

| Concepto Universal | Genshin Impact | Honkai: Star Rail | Zenless Zone Zero |
| :--- | :--- | :--- | :--- |
| `currency_gold` | Mora | Créditos | Denies |
| `combat_element` | Elemento | Tipo de Combate | Atributo |
| `combat_class` | Tipo de Arma | Vía | Especialidad |
| `gear_artifacts` | Artefactos | Reliquias | Pistas de Disco |
| `endgame_tower` | Espiral del Abismo | Memoria del Caos | Defensa Shiyu |

## 🗺️ Roadmap de Desarrollo

El desarrollo está estructurado en fases incrementales para asegurar la estabilidad técnica:

### Fase 1: MVP (Producto Mínimo Viable)
- [ ] Configuración del Backend as a Service (BaaS) con Firebase/Supabase.
- [ ] Implementación de inicio de sesión seguro (Social Login).
- [ ] Creación de la interfaz "Hub Central".
- [ ] Conexión inicial con la API de Enka.network para extraer un perfil de Genshin Impact.

### Fase 2: Expansión de la Biblioteca
- [ ] Estructuración de los archivos JSON del Diccionario Universal.
- [ ] Desarrollo de la Galería de Personajes y Fichas de Detalle.
- [ ] Integración de los catálogos estáticos de Honkai: Star Rail y Zenless Zone Zero.

### Fase 3: Herramientas e Inventario
- [ ] Sistema de guardado en la nube para el inventario del usuario.
- [ ] Desarrollo de la calculadora matemática de ascensión.
- [ ] Implementación de un sistema de caché para evitar el *Rate Limiting* en las peticiones de red.

### Fase 4: Analítica y Endgame
- [ ] Filtros avanzados de personajes por sinergias y modos de juego (Roguelikes, Boss-Rush).
- [ ] Integración de telemetría y reporte automático de errores (Crashlytics).

## ⚖️ Descargo de Responsabilidad Legal (Disclaimer)

**Starlit Guides** es un proyecto creado por fans, para fans. No está afiliado, asociado, autorizado, respaldado ni conectado oficialmente de ninguna manera con **Cognosphere PTE. LTD.** o **HoYoverse**. 

Todos los activos del juego, arte, nombres de personajes, iconos, lore y propiedades intelectuales pertenecen a sus respectivos dueños. Esta aplicación se desarrolla bajo los lineamientos permitidos para el contenido creado por fans (Fan-Made Content) con fines estrictamente informativos y de utilidad para la comunidad.
