# Mi Lista de Tareas

Una aplicación simple de lista de tareas construida con React.

## Pipeline CI/CD

Este proyecto utiliza GitHub Actions para implementar un pipeline de CI/CD que automatiza las pruebas y el despliegue.

### Estructura del Pipeline

El pipeline consta de dos jobs principales:

1. **Test**
   - Se ejecuta en cada push y pull request
   - Instala las dependencias
   - Ejecuta las pruebas unitarias
   - Asegura la calidad del código

2. **Build**
   - Se ejecuta solo en la rama UAT
   - Depende del éxito del job de Test
   - Construye la aplicación
   - Guarda los artefactos de construcción

### Pruebas Implementadas

El proyecto incluye cuatro pruebas principales:
1. Verificación del renderizado del título
2. Prueba de agregación de tareas
3. Validación de tareas vacías
4. Verificación de limpieza del input

### Configuración Local

Para ejecutar el proyecto localmente: 