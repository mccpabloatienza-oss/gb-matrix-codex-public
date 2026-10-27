# Revisión de seguridad previa a publicación

## Reglas

- El repositorio inicia privado.
- No se copian archivos, capturas, rutas ni historial del repositorio comercial.
- El dataset se genera desde cero; no es una transformación de filas reales.
- No se incluyen nombres de proveedores, clientes, productos comerciales, precios, costos ni márgenes reales.
- Las fórmulas son genéricas y no se presentan como propiedad de la empresa.
- Antes de solicitar visibilidad pública se debe revisar todo el historial Git, secretos, dependencias, enlaces, metadatos y comportamiento responsive.

## Comprobaciones reproducibles

```powershell
git log --all --stat
git ls-files
npm test
npm run check
```

La revisión no se considera completa hasta que se inspeccione el historial completo y se obtenga aprobación humana para hacer público el repositorio.
