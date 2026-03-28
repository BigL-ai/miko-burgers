# Skill: /status — Estado actual de la app

## Cuándo aplicar
Cuando el usuario ejecuta /status o quiere retomar
el proyecto después de un tiempo sin trabajar en él.

## Qué hace
Genera un resumen completo del estado actual de MIKO:
qué está funcionando, qué está pendiente, y cuál es
el próximo paso recomendado.

## Proceso obligatorio
1. Leer el .claude.md del proyecto
2. Revisar el último commit de Git
3. Verificar que la app buildea sin errores
4. Chequear si hay cambios sin commitear
5. Mostrar el resumen completo

## Comandos para verificar
```bash
# Ver último commit
git log --oneline -5

# Ver cambios sin commitear
git status

# Ver la URL en producción
echo "https://miko-burgers.vercel.app"
```

## Formato de respuesta
🍔 MIKO BURGERS — Estado al [fecha]

📦 Último deploy:
- Commit: [mensaje del último commit]
- Fecha: [fecha]
- URL: https://miko-burgers.vercel.app

📋 Cambios sin commitear: [Sí / No]
[lista de archivos si hay]

✅ Funcionalidades activas:
- Menú con X items
- Carrito (Zustand)
- Delivery / Takeaway toggle
- WhatsApp deep link → +54 9 11 7237-3454
- Deploy en Vercel

⏳ Pendientes:
- [lista de lo que falta según Notion]

🎯 Próximo paso recomendado:
- [acción concreta]

## Stack recordatorio
- React 18 + Vite 5 (Node 18.17.0)
- Tailwind CSS 3
- Zustand + Framer Motion
- Vercel hosting

## Lo que NO hacer
- No asumir que el estado es el mismo de la última sesión
- No saltar la verificación de cambios sin commitear
- No omitir el próximo paso recomendado
