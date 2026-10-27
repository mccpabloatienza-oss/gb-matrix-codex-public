# Reproducibilidad

1. Instalar Node.js LTS.
2. Ejecutar `npm run generate`; el generador usa la semilla fija `20261026`.
3. Ejecutar `npm test` y `npm run check`.
4. Servir la carpeta con `python -m http.server 8000`.
5. Abrir `http://localhost:8000`.

El generador crea exactamente 800 productos, cinco marcas, seis categorías y doce períodos. La aplicación no necesita backend ni infraestructura paga.
