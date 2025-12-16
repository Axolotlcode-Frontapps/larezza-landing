# Larezza Landing Page
Empresa encargada a la experiencia de belleza que combina tecnologia estetica y tecnicas manuales expertas

## Requisitos
- Node.js >= 22
- Bun >= 1.0 

## Instalación
```bash
# Clonar el repositorio
git clone https://github.com/Axolotlcode-Frontapps/larezza-landing
cd larezza-landing

# Instalar dependencias
bun install

# Iniciar desarrollo
bun run dev
```

## Scripts Disponibles
- `dev`: inicia servidor de desarrollo
- `build`: genera la versión de producción
- `preview`: sirve el build localmente para testing
- `lint`: ejecuta Biome para revisar código
- `lint:fix`: ejecuta Biome y corrige automáticamente los errores
- `commit`: herramienta interactiva para commits con gitmoji
- `prepare`: configura git hooks con husky

## Stack Tecnológico

### Core
- **Astro 5.x**: Framework principal para sitios estáticos/SSR
- **React 19**: Para componentes interactivos
- **TypeScript**: Tipado estático
- **TailwindCSS 4.x**: Framework de CSS utility-first

### UI & Components
- **shadcn/ui**: Biblioteca de componentes reutilizables
- **Radix UI**: Componentes primitivos accesibles
- **Lucide React**: Iconos modernos
- **Class Variance Authority**: Gestión de variantes de componentes

### Herramientas de Desarrollo
- **Biome**: Linter y formateador de código (reemplazo de ESLint + Prettier)
- **Husky**: Git hooks para automatización
- **lint-staged**: Ejecuta linters solo en archivos staged
- **Gitmoji CLI**: Commits estandarizados con emojis

### Containerización
- **Docker**: Incluye Dockerfile para deployment en contenedores

## Estructura del Proyecto
```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```
### Directorios Principales

- **`public/`**: Archivos estáticos (imágenes, favicon, etc.)
- **`src/ui/components/`**: Componentes específicos de página
- **`src/layout/`**: Layouts y plantillas compartidas
- **`src/pages/`**: Rutas automáticas basadas en archivos

## Desarrollo

### Crear Nuevos Componentes
Los componentes siguen la estructura de shadcn/ui:
```bash
# Componentes van en src/ui/shared/ para reutilización
# Componentes de página van en src/ui/components/[page-name]/
```

### Agregar Nuevas Páginas
1. Crea un archivo `.astro` en `src/pages/`
2. Usa los layouts de `src/layout/` para estructura consistente
3. Importa componentes desde `src/ui/`

### Estilos
- TailwindCSS configurado con CSS 4.0
- Estilos globales en `src/ui/styles/global.css`
- Componentes usan el sistema de design tokens de shadcn/ui

## Workflow de Git
Este proyecto usa convenciones modernas de Git:

```bash
# Hacer commits con gitmoji
bun run commit

# Los hooks automáticamente ejecutan:
# - Biome lint en archivos staged
# - Formateo automático
```

## Despliegue

### Estático (Recommended)
```bash
bun run build
# Archivos generados en dist/
```

## Configuración Adicional

### Variables de Entorno
Crea un archivo `.env` para variables locales:
```env
# Ejemplo
PUBLIC_API_URL=https://api.example.com
```

### Personalizaciones
- **Astro**: `astro.config.mjs`
- **TailwindCSS**: Ver configuración en Vite plugins
- **TypeScript**: `tsconfig.json`
- **Biome**: `biome.json`

## Recursos
- [Documentación de Astro](https://docs.astro.build/)
- [shadcn/ui](https://ui.shadcn.com/)
- [TailwindCSS](https://tailwindcss.com/docs)
- [Biome](https://biomejs.dev/)


