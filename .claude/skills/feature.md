# Skill: /feature — Planificación e Implementación de Features

## Cuándo aplicar
Cuando el usuario ejecuta /feature o quiere agregar
una funcionalidad nueva a la app de MIKO.

## Qué hace
Guía el proceso completo de una feature nueva: desde
la planificación hasta el deploy. Evita improvisar y
asegura que cada cambio sea pensado antes de codear.

## Proceso obligatorio (en orden)
1. Entender qué quiere el usuario en términos simples
2. Traducirlo a requerimientos técnicos
3. Identificar qué archivos se van a tocar
4. Estimar complejidad (Simple / Media / Compleja)
5. Mostrar el plan antes de escribir código
6. Implementar paso a paso
7. Verificar que no rompió nada existente
8. Sugerir /deploy cuando esté lista

## Template de planificación
Antes de codear, mostrar siempre este plan:

📋 FEATURE: [nombre]
📁 Archivos a modificar:
  - src/components/[archivo].jsx
  - src/data/menu.json
  - etc.
⚡ Complejidad: Simple / Media / Compleja
⏱️ Estimación: X pasos
🔗 Dependencias: [si depende de algo existente]
⚠️ Riesgos: [qué podría romperse]

## Features frecuentes en MIKO
- Agregar nuevo ítem al menú → /menu
- Cambiar precios → /menu
- Modificar colores/estilos → Tailwind CSS
- Agregar sección nueva → nuevo componente en /components
- Cupones de descuento → lógica en useCartStore
- Mercado Pago → integración futura (fase 2)
- Horarios de atención → nuevo componente
- Galería de fotos → nueva sección

## Stack de MIKO (para contexto)
- React 18 + Vite 5
- Tailwind CSS 3
- Zustand (estado del carrito)
