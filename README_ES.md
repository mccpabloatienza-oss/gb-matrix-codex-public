# GB Matrix (Matriz GB) — The Business Expert, Unlocked

*Del conocimiento empresarial a una herramienta de decisión y, después, a una evolución técnica verificable con Codex.*

Pablo Atienza, profesional de marketing e inteligencia comercial con más de 25 años de experiencia, dirigió el desarrollo de **GB Matrix** utilizando ChatGPT. El artefacto original reúne tracción de demanda (ITD), relevancia de inventario (IRI), modelos alternativos sometidos a revisión y backtesting, conciliación de fuentes, filtros, fichas de producto y vistas tabulares. También incorpora una decisión empresarial real: **el SKU individual y la familia comercial son identidades complementarias**. Posteriormente, Codex desarrolló una demostración pública independiente con 800 productos enteramente ficticios, 12 períodos, JavaScript modular, actualización CSV, 15 pruebas aprobadas, CI y commits auditables. La propuesta educativa es enseñar a profesionales de negocios a dirigir, comprobar y mantener software con Codex. La herramienta de producción y la demo pública son sistemas separados.

[Demo pública](https://mccpabloatienza-oss.github.io/gb-matrix-codex-public/) · [Caso para evaluadores](docs/CASE_STUDY_FOR_REVIEWERS.md) · [Pruebas CI](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/actions/runs/40445413546) · [Video](https://www.youtube.com/shorts/JTkRiMG96o4)

**TODOS LOS DATOS DE LA DEMO SON SINTÉTICOS. NO INCLUYE REGISTROS COMERCIALES REALES.** Los indicadores de demostración son fórmulas genéricas, no las fórmulas privadas del sistema original.

## Qué enseña la demo

- Analizar demanda e inventario mediante un mapa ITD × IRI, cuadrantes, filtros, historia y detalle.
- Generar datos ficticios reproducibles y validar datos erróneos.
- Simular una actualización mensual CSV con nuevos períodos y snapshots locales.
- Inspeccionar código modular y 15 pruebas que se ejecutan con `npm test`.
- Reconocer qué aportó la experiencia humana y qué implementó Codex.

## Una decisión de negocio implementada en el artefacto original

En una situación empresarial **real, con marcas anonimizadas**:

- **Brand 1** disponía de identificadores más estables para reconocer productos.
- **Brand 2** requería combinar señales del SKU con título normalizado, modelo y categoría para identificar familias comerciales.

La solución conservó dos escalas: **SKU** para trazabilidad exacta y **familia** para analizar demanda y exposición comercial conjunta. Esa segunda perspectiva se incorporó a una versión histórica privada de GB Matrix y no es una simulación retrospectiva.

**Límite explícito:** la demo pública de Codex todavía **no implementa** la agrupación de familias; Codex sí implementó los módulos sintéticos, CSV, pruebas, documentación y CI. El selector nativo de archivos CSV queda pendiente de comprobación manual desde un navegador; las rutas de parsing y validación cuentan con tests.

## Reproducir

```bash
npm run generate
npm test
npm run check
node scripts/audit_public_repo.js
python -m http.server 8000
```

Abrir `http://localhost:8000`.

## Documentación y propuesta educativa

[Bitácora de Codex](CODEX_DEVELOPMENT_LOG.md) · [Decisiones del autor](HUMAN_DECISIONS.md) · [Historial de instrucciones](PROMPT_HISTORY.md) · [Pruebas](TEST_REPORT.md) · [Revisión de publicación](docs/SECURITY_REVIEW.md)

[Primer tutorial propuesto: del problema comercial a una matriz verificada con Codex](https://github.com/mccpabloatienza-oss/gb-matrix-codex-public/issues/3).

**Objetivo:** publicar una demostración o tutorial bilingüe y reproducible por mes para profesionales hispanohablantes que conocen sus negocios y desean ampliar su capacidad técnica.
