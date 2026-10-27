# The Business Expert, Unlocked

*De ChatGPT a Codex: construir y mantener analítica de negocios sin formación profesional en desarrollo.*

Este repositorio es una demostración independiente y segura del concepto Matriz GB. La herramienta original fue concebida con ChatGPT Plus a partir del conocimiento profesional del autor. Este proyecto no atribuye a Codex la creación inicial: documenta el trabajo posterior de modularización, generación reproducible de datos sintéticos, validación, pruebas y mantenimiento.

**ALL DATA IS SYNTHETIC. NO REAL COMMERCIAL RECORDS ARE INCLUDED.** Hay 800 productos ficticios, cinco marcas inventadas, seis categorías genéricas y doce períodos generados desde cero con semilla fija `20261026`.

## Qué se puede demostrar

- Mapa ITD × IRI con fórmulas genéricas y transparentes.
- Cuadrantes operativos, filtros y ficha individual.
- Historial de ventas y stock sintéticos.
- Actualización mensual CSV simulada con normalización, validaciones, nuevo período y persistencia local de snapshots.
- Pruebas automatizadas y reproducción local.

Las fórmulas son demostrativas y no representan las fórmulas propietarias de la empresa.

## Ejecutar

```powershell
npm run generate
npm test
npm run check
python -m http.server 8000
```

Abrir `http://localhost:8000`.

La publicación pública, GitHub Pages y cualquier cambio de visibilidad requieren aprobación humana después de la auditoría de seguridad.

## Presentación

Video de presentación del autor: [YouTube Shorts](https://www.youtube.com/shorts/JTkRiMG96o4). El video aporta contexto narrativo; la evidencia técnica está en el repositorio.
