# Skill: /debug — Diagnóstico de Bugs

## Cuándo aplicar
Cuando el usuario ejecuta /debug o reporta algo que
no funciona visualmente o lógicamente en la app.

## Qué hace
Diagnóstico rápido y estructurado de bugs en MIKO,
especialmente útil durante mobile testing.

## Proceso obligatorio
1. Identificar si es bug visual, lógico o de datos
2. Reproducir el bug con los pasos exactos
3. Identificar en qué componente ocurre
4. Revisar el estado de Zustand si es bug de carrito
5. Proponer solución con el código exacto
6. Verificar que no rompió nada más

## Tipos de bugs frecuentes en MIKO

### Bug visual (Tailwind/CSS)
- Revisar clases de Tailwind aplicadas
- Verificar breakpoints mobile (sm:, md:)
- Chequear z-index si algo no se ve

### Bug de lógica (React/Zustand)
- Revisar useCartStore y useOrderStore
- Verificar que los handlers están bien conectados
- Chequear el flujo de pasos en App.jsx

### Bug de datos (menu.json)
- Verificar estructura del JSON
- Chequear IDs duplicados
- Verificar que las imágenes existen en /public

### Bug de WhatsApp
- Verificar buildWhatsAppMessage en /utils
- Chequear que el número tiene formato correcto
- Verificar que el mensaje no supera el límite

## Formato de respuesta
🔴 QUÉ PASÓ: [descripción simple]
📍 DÓNDE: [componente o archivo]
🔍 POR QUÉ: [causa raíz]
✅ SOLUCIÓN:
  1. [paso 1 con código exacto]
  2. [paso 2]
🧪 VERIFICACIÓN: [cómo confirmarlo]

## Lo que NO hacer
- No tocar archivos no relacionados con el bug
- No proponer soluciones sin identificar la causa raíz
- No ignorar bugs de mobile (es el 80% del tráfico)
