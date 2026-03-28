# Skill: /menu — Gestión del Menú

## Cuándo aplicar
Cuando el usuario ejecuta /menu o quiere agregar,
modificar o eliminar ítems del menú de MIKO.

## Qué hace
Modifica el archivo src/data/menu.json sin romper
la estructura del proyecto. Guía al usuario paso a paso.

## Estructura de menu.json
Cada ítem del menú tiene esta estructura exacta:
{
  "id": "burger-01",
  "name": "Nombre de la burger",
  "description": "Descripción corta",
  "price": 5500,
  "image": "/images/burger-01.jpg",
  "category": "burgers",
  "available": true
}

## Proceso para AGREGAR un ítem
1. Pedir los datos: nombre, descripción, precio, imagen
2. Generar el ID automáticamente (burger-XX, combo-XX)
3. Mostrar el JSON del nuevo ítem para revisión
4. Agregar al array correspondiente en menu.json
5. Verificar que el JSON sigue siendo válido
6. Sugerir hacer /deploy si el cambio está listo

## Proceso para MODIFICAR un ítem
1. Identificar el ítem por nombre o ID
2. Mostrar los valores actuales
3. Pedir los nuevos valores
4. Aplicar el cambio
5. Verificar que el JSON sigue siendo válido

## Proceso para ACTUALIZAR PRECIOS
1. Preguntar si es un ítem o todos
2. Si es todos → aplicar el porcentaje de aumento
3. Mostrar tabla antes/después para confirmar
4. Aplicar solo después de confirmación

## Reglas importantes
- Precios siempre en ARS (número entero, sin puntos ni comas)
- IDs siempre en kebab-case: burger-01, combo-02
- Imágenes en /images/ con extensión .jpg o .webp
- Nunca romper la estructura del JSON
- Siempre validar el JSON después de modificar

## Lo que NO hacer
- No modificar sin mostrar preview primero
