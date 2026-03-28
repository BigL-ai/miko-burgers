# Skill: /deploy — Build y Deploy a Vercel

## Cuándo aplicar
Cuando el usuario ejecuta /deploy o quiere subir
cambios a producción en miko-burgers.vercel.app.

## Qué hace
Ejecuta el flujo completo de deploy: guarda cambios
en Git y los publica en Vercel en un solo proceso.

## Proceso obligatorio
1. Verificar que no hay errores de compilación
2. Hacer build local para detectar problemas antes de subir
3. Commitear los cambios con un mensaje descriptivo
4. Pushear a GitHub
5. Deployar a Vercel
6. Confirmar que el deploy fue exitoso con la URL

## Comandos exactos
```bash
# 1. Build local (detecta errores antes de subir)
npm run build

# 2. Git: guardar cambios
git add -A
git commit -m "feat: [descripción del cambio]"
git push

# 3. Deploy a Vercel
npx vercel --yes --prod
```

## Formato de respuesta
🚀 Deploy iniciado...

✅ Build: OK
✅ Git commit: [mensaje]
✅ Push a GitHub: OK
✅ Vercel deploy: OK

🌐 App live en: https://miko-burgers.vercel.app

## Tipos de commit para MIKO
- feat: nueva funcionalidad
- fix: corrección de bug
- style: cambios visuales
- menu: actualización del menú
- config: cambios de configuración

## Manejo de errores
- Si el build falla → mostrar el error y NO commitear
- Si el push falla → verificar credenciales de Git
- Si Vercel falla → mostrar el log de error completo
- Nunca deployar si el build tiene errores

## Lo que NO hacer
- No commitear sin mensaje descriptivo
- No deployar sin hacer build primero
- No ignorar errores del build
