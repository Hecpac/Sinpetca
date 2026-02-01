# SINPETCA - Roadmap de Imágenes por Sección

> Documento que detalla todas las imágenes necesarias para el sitio web, organizadas por sección y página. Basado en el análisis del brochure empresarial y la estructura del sitio.

---

## Resumen de Imágenes Necesarias

| Sección | Cantidad | Prioridad |
|---------|----------|-----------|
| Hero Carousel | 3 fondos + 9 miniaturas | Alta |
| Servicios (Home) | 4 imágenes | Alta |
| Clientes | 8-12 logos | Media |
| Equipo (Nosotros) | 4-6 fotos | Media |
| Proyectos | 12-18 fotos | Alta |
| Servicios Individuales | 4 heroes + galería | Alta |
| Certificaciones | 4-6 documentos | Media |
| Contacto | 1 mapa + oficina | Baja |
| **TOTAL ESTIMADO** | **50-70 imágenes** | - |

---

## 1. PÁGINA PRINCIPAL (HOME)

### 1.1 Hero Carousel (3 Slides)

#### Slide 1: Inspección Industrial General
**Archivo:** `/public/images/hero/hero-1.jpg`
**Dimensiones:** 1920x1080px mínimo (16:9)
**Descripción:**
- Imagen panorámica de maquinaria industrial de inspección
- Preferiblemente de una planta petrolera o refinería
- Técnico con equipos de medición NDT
- Colores predominantes: tonos industriales (azules, grises metálicos)
- Puede usarse una foto de inspección en tanques de almacenamiento

**Referencia del Brochure:** Páginas 5-6 muestran inspecciones en industria petrolera

**Miniaturas del Slide 1:**
| Archivo | Descripción |
|---------|-------------|
| `/public/images/projects/project-1.jpg` | Tanque de almacenamiento API 650/653 |
| `/public/images/projects/project-2.jpg` | Inspección de tubería con ultrasonido |
| `/public/images/projects/project-3.jpg` | Técnico realizando ensayo NDT |

---

#### Slide 2: Sector Petrolero
**Archivo:** `/public/images/hero/hero-2.jpg`
**Dimensiones:** 1920x1080px mínimo
**Descripción:**
- Refinería con torres de destilación o tanques de almacenamiento
- Ambiente de la Faja Petrolífera del Orinoco (ideal si disponible)
- Trabajadores con PPE en ambiente industrial
- Amanecer/atardecer para iluminación dramática

**Referencia del Brochure:** Páginas 14-16 muestran trabajos en faja petrolera

**Miniaturas del Slide 2:**
| Archivo | Descripción |
|---------|-------------|
| `/public/images/projects/refinery-1.jpg` | Vista de refinería o planta de proceso |
| `/public/images/projects/pipeline-1.jpg` | Inspección de oleoducto/tubería enterrada |
| `/public/images/projects/storage-1.jpg` | Interior o exterior de tanque de almacenamiento |

---

#### Slide 3: Certificación Aeronáutica
**Archivo:** `/public/images/hero/hero-3.jpg`
**Dimensiones:** 1920x1080px mínimo
**Descripción:**
- Hangar con aeronave o helicóptero
- Técnico realizando inspección en avión
- Equipos de NDT aeronáutico visibles
- Ambiente profesional y técnico

**Referencia del Brochure:** Páginas 25-28 muestran trabajos con Avior, SASCA, helicópteros PDVSA

**Miniaturas del Slide 3:**
| Archivo | Descripción |
|---------|-------------|
| `/public/images/projects/aircraft-1.jpg` | Inspección de fuselaje de avión |
| `/public/images/projects/engine-1.jpg` | Inspección de motor/turbina (boroscopia) |
| `/public/images/projects/structure-1.jpg` | Tren de aterrizaje o estructura |

---

### 1.2 Sección de Servicios

| Archivo | Servicio | Descripción de la Imagen |
|---------|----------|--------------------------|
| `/public/images/services/petrolera.jpg` | Industria Petrolera | Tanque API o equipo de refinería con técnico inspeccionando. Usar tonos azul navy de la marca. Aspecto: 4:3 o 16:9, 800x600px mínimo |
| `/public/images/services/naval.jpg` | Industria Naval | Grúa portuaria, remolcador, o buque tanquero. Inspección de casco o equipo de izaje. Referencia: Páginas 21-24 del brochure (Tech Marine, remolcadores ATH) |
| `/public/images/services/aeronautica.jpg` | Industria Aeronáutica | Técnico con equipo de boroscopia inspeccionando motor. Avión de Avior o helicóptero PDVSA como referencia. Ambiente de hangar |
| `/public/images/services/ndt.jpg` | Ensayos No Destructivos | Collage o imagen de equipos NDT: ultrasonido, radiografía, líquidos penetrantes. Técnico aplicando tintes penetrantes (referencia: página 20 del brochure) |

---

### 1.3 Sección de Clientes (Logos)

**Directorio:** `/public/images/clients/`
**Formato:** PNG con fondo transparente
**Dimensiones:** 200x100px (ancho x alto) máximo

| Archivo | Cliente | Notas |
|---------|---------|-------|
| `pdvsa.png` | PDVSA | Cliente principal - múltiples proyectos |
| `petrosucre.png` | Petrosucre S.A. | Proyecto WHP Golfo de Paria |
| `avior.png` | Avior Airlines | Servicios aeronáuticos |
| `sasca.png` | SASCA | Inspección de aeronaves |
| `tts.png` | Turbine Total Service | Complejo termoeléctrico |
| `tech-marine.png` | Tech Marine de Oriente | Inspección naval |
| `stalco.png` | STALCO | Calibración de tanques |
| `felconsa.png` | Transporte Felconsa | Certificación de grúas |
| `vencemos.png` | Vencemos Pertigalete | Mantenimiento de grúas |
| `cerro-azul.png` | Cemento Cerro Azul | Servicios de ultrasonido |
| `interschipping.png` | Interschipping Terminal | Inspección de containers |
| `dinamo.png` | Dinamo Valencia | Cursos de operadores |

**Referencia:** Páginas 35-38 del brochure muestran clientes

---

### 1.4 Avatares de Clientes (Social Proof)

**Directorio:** `/public/images/avatars/`
**Formato:** JPG o PNG
**Dimensiones:** 100x100px (cuadrado, se mostrará circular)

| Archivo | Descripción |
|---------|-------------|
| `client-1.jpg` | Foto representativa de cliente corporativo (puede ser stock de gerente industrial) |
| `client-2.jpg` | Foto representativa de cliente 2 |
| `client-3.jpg` | Foto representativa de cliente 3 |

---

## 2. PÁGINA NOSOTROS

### 2.1 Fotos del Equipo Directivo

**Directorio:** `/public/images/team/`
**Formato:** JPG
**Dimensiones:** 400x500px mínimo (proporción 4:5 retrato)
**Estilo:** Fondo neutro o industrial, iluminación profesional, uniforme o vestimenta formal

| Archivo | Cargo | Notas |
|---------|-------|-------|
| `director-general.jpg` | Director General | Foto profesional de frente o 3/4 |
| `director-tecnico.jpg` | Director(a) Técnico(a) | Con bata o PPE si disponible |
| `gerente-operaciones.jpg` | Gerente de Operaciones | Foto corporativa |
| `gerente-calidad.jpg` | Gerente de Calidad | Foto corporativa |

**Alternativa:** Si no hay fotos reales, usar placeholders con iniciales (ya implementado)

---

### 2.2 Imágenes para Timeline de la Empresa

**Directorio:** `/public/images/timeline/`
**Formato:** JPG
**Dimensiones:** 600x400px mínimo

| Archivo | Año | Descripción |
|---------|-----|-------------|
| `fundacion-1988.jpg` | 1988 | Foto histórica de oficinas originales o primeros equipos |
| `certificacion-api-1995.jpg` | 1995 | Certificado API o imagen representativa |
| `expansion-ndt-2002.jpg` | 2002 | Equipos NDT de la época |
| `certificacion-asme-2008.jpg` | 2008 | Certificado ASME |
| `iso-17020-2012.jpg` | 2012 | Entrega de certificación ISO |
| `aeronautica-2016.jpg` | 2016 | Primera inspección aeronáutica |
| `actualidad-2024.jpg` | 2024 | Equipo moderno y oficinas actuales |

---

### 2.3 Imagen Hero Nosotros

**Archivo:** `/public/images/about/about-hero.jpg`
**Dimensiones:** 1920x600px mínimo
**Descripción:**
- Foto grupal del equipo SINPETCA (si disponible)
- O imagen panorámica de las instalaciones/oficinas
- Ambiente profesional que transmita experiencia y confianza

---

## 3. PÁGINAS DE SERVICIOS INDIVIDUALES

### 3.1 Servicio: Industria Petrolera

**Hero:** `/public/images/services/petrolera-hero.jpg`
**Dimensiones:** 1920x600px
**Descripción:** Panorámica de refinería con tanques y torres de proceso

**Galería de servicios:**

| Archivo | Servicio | Descripción |
|---------|----------|-------------|
| `/public/images/petrolera/soldaduras.jpg` | Inspección de Soldaduras | Técnico inspeccionando soldadura con lupa o equipo UT |
| `/public/images/petrolera/tanques.jpg` | Tanques de Almacenamiento | Interior de tanque API 653 o inspección exterior |
| `/public/images/petrolera/recipientes.jpg` | Recipientes a Presión | Intercambiador de calor o recipiente ASME |
| `/public/images/petrolera/tuberias.jpg` | Sistemas de Tuberías | Rack de tuberías o inspección de ductos |

**Referencia del Brochure:**
- Página 14: Inspección de revestimiento a tubería enterrada
- Páginas 15-18: Equipos de excavación e izamiento en faja petrolera

---

### 3.2 Servicio: Industria Naval

**Hero:** `/public/images/services/naval-hero.jpg`
**Dimensiones:** 1920x600px
**Descripción:** Puerto con buques, grúas o remolcadores

**Galería de servicios:**

| Archivo | Servicio | Descripción |
|---------|----------|-------------|
| `/public/images/naval/gruas.jpg` | Certificación de Grúas | Grúa de celosía (referencia: página 12 - grúa 1100 ton Felconsa) |
| `/public/images/naval/espesores.jpg` | Medición de Espesores | Técnico con equipo UT en casco de buque |
| `/public/images/naval/offshore.jpg` | Estructuras Offshore | Plataforma WHP (referencia: página 13 - Petrosucre) |
| `/public/images/naval/izaje.jpg` | Equipos de Izaje | Cables de acero, grilletes, tensores en remolcador |

**Referencia del Brochure:**
- Página 21: Close-up inspección de casco
- Página 22: Calibración de tanques de carga
- Páginas 23-24: Inspección de remolcadores ATH 84/85

---

### 3.3 Servicio: Industria Aeronáutica

**Hero:** `/public/images/services/aeronautica-hero.jpg`
**Dimensiones:** 1920x600px
**Descripción:** Interior de hangar con aeronave comercial

**Galería de servicios:**

| Archivo | Servicio | Descripción |
|---------|----------|-------------|
| `/public/images/aeronautica/estructuras.jpg` | Inspección de Estructuras | Técnico inspeccionando fuselaje con boroscopia |
| `/public/images/aeronautica/motores.jpg` | Componentes de Motor | Boroscopia de cámara de combustión (ref: página 26) |
| `/public/images/aeronautica/tren.jpg` | Tren de Aterrizaje | Inspección MLG (referencia: páginas 26, 278-281) |
| `/public/images/aeronautica/compuestos.jpg` | Materiales Compuestos | Inspección de panel de fibra de carbono |

**Referencia del Brochure:**
- Página 25: Equipos de emergencia Avior
- Página 26: Inspección SASCA con boroscopia
- Página 27: Helicópteros PDVSA
- Página 28: Ultrasonido y Eddy Current

---

### 3.4 Servicio: Ensayos No Destructivos (NDT)

**Hero:** `/public/images/services/ndt-hero.jpg`
**Dimensiones:** 1920x600px
**Descripción:** Laboratorio o técnico con múltiples equipos NDT

**Galería de técnicas NDT:**

| Archivo | Técnica | Descripción |
|---------|---------|-------------|
| `/public/images/ndt/ultrasonido.jpg` | Ultrasonido (UT) | Equipo de ultrasonido phased array o convencional |
| `/public/images/ndt/radiografia.jpg` | Radiografía (RT) | Equipo de rayos X industrial |
| `/public/images/ndt/liquidos.jpg` | Líquidos Penetrantes (PT) | Aplicación de tintes (referencia: página 20) |
| `/public/images/ndt/particulas.jpg` | Partículas Magnéticas (MT) | Técnica de partículas fluorescentes |
| `/public/images/ndt/corrientes.jpg` | Corrientes Inducidas (ET) | Equipo Eddy Current |
| `/public/images/ndt/visual.jpg` | Inspección Visual | Boroscopia industrial |

**Referencia del Brochure:**
- Página 19: Medición de espesores
- Página 20: Tintes penetrantes
- Páginas 28-29: Ultrasonido y Eddy Current
- Página 29: Inspección de álabes de turbina

---

## 4. PÁGINA DE PROYECTOS

### 4.1 Galería de Proyectos Completados

**Directorio:** `/public/images/proyectos/`
**Formato:** JPG
**Dimensiones:** 800x600px mínimo (proporción 4:3)

| Archivo | Proyecto | Industria | Descripción |
|---------|----------|-----------|-------------|
| `termoelectrico-urdaneta.jpg` | Complejo Termoeléctrico Urdaneta | Petrolera | Inspección NDT Unidad TZ-02 (Mayo 2024) |
| `grua-felconsa.jpg` | Grúa Celosía 1100 Ton | Naval/Industrial | Certificación Barcelona (ref: página 12) |
| `whp-petrosucre.jpg` | Plataforma WHP | Offshore | Equipos de izaje Golfo de Paria (Feb 2024) |
| `tuberia-enterrada.jpg` | Tubería Enterrada | Petrolera | Inspección revestimiento Barcelona (Feb 2024) |
| `excavacion-faja.jpg` | Equipos de Excavación | Petrolera | Faja Petrolífera del Orinoco |
| `izamiento-faja.jpg` | Equipos de Izamiento | Petrolera | Zona Sur Anzoátegui (Jul 2017) |
| `ndt-estructural.jpg` | NDT Estructural | Industrial | Accesorios de izamiento Barcelona |
| `medicion-espesores.jpg` | Medición de Espesores | NDT | Ultrasonido en campo |
| `tintes-penetrantes.jpg` | Tintes Penetrantes | NDT | Faja del Orinoco |
| `casco-techmarine.jpg` | Close-up Casco | Naval | Tech Marine de Oriente (Feb 2024) |
| `tanques-stalco.jpg` | Calibración Tanques | Naval | Puerto de Guanta (Oct 2023) |
| `buque-panama.jpg` | Tanquero Panameño | Naval | Soldaduras Cardón IV (Jul 2018) |
| `remolcadores-ath.jpg` | Remolcadores ATH | Naval | Certificación equipos Malasia |
| `avior-emergencia.jpg` | Equipos Emergencia | Aeronáutica | Avior Airlines Barcelona |
| `sasca-boroscopia.jpg` | Boroscopia SASCA | Aeronáutica | Cámara combustión Anaco |
| `helicopteros-pdvsa.jpg` | Helicópteros PDVSA | Aeronáutica | Grúa puente y certificación |
| `turbinas-pertigalete.jpg` | Álabes Turbina | Industrial | Planta Pertigalete Guanta |
| `grua-polipasto.jpg` | Grúa Polipasto | Industrial | Vencemos Pertigalete |
| `martillos-cerroazul.jpg` | Ultrasonido Martillos | Industrial | Cemento Cerro Azul (May 2020) |
| `containers-interschipping.jpg` | Sujetadores Container | Naval | Interschipping Barcelona/Maracaibo |

---

## 5. PÁGINA DE CERTIFICACIONES

### 5.1 Imágenes de Certificados

**Directorio:** `/public/images/certificaciones/`
**Formato:** PDF scan o JPG de alta resolución
**Dimensiones:** 800x1100px mínimo (proporción carta/A4)

| Archivo | Certificación | Descripción |
|---------|---------------|-------------|
| `iso-17020.jpg` | ISO/IEC 17020:2012 | Certificado SENCAMER vigente |
| `omac-n-667.jpg` | OMAC-N 667 | Certificado INAC Venezuela |
| `api-653.jpg` | API 653 | Certificado American Petroleum Institute |
| `api-570.jpg` | API 570 | Certificado para tuberías |
| `api-510.jpg` | API 510 | Certificado para recipientes |
| `asme.jpg` | ASME | Certificado ASME International |

### 5.2 Logos de Organismos Certificadores

**Directorio:** `/public/images/certificaciones/logos/`
**Formato:** PNG con fondo transparente
**Dimensiones:** 200x100px máximo

| Archivo | Organismo |
|---------|-----------|
| `sencamer-logo.png` | SENCAMER |
| `inac-logo.png` | INAC Venezuela |
| `api-logo.png` | American Petroleum Institute |
| `asme-logo.png` | ASME International |
| `asnt-logo.png` | ASNT |

---

## 6. PÁGINA DE CONTACTO

### 6.1 Imágenes de Ubicación

| Archivo | Descripción |
|---------|-------------|
| `/public/images/contacto/oficina.jpg` | Fachada o interior de oficinas SINPETCA |
| `/public/images/contacto/mapa.jpg` | Captura de mapa de ubicación (backup si no hay integración) |

---

## 7. ELEMENTOS GENERALES

### 7.1 Logo de la Empresa

**Directorio:** `/public/images/brand/`

| Archivo | Uso | Formato | Dimensiones |
|---------|-----|---------|-------------|
| `logo-completo.svg` | Header, documentos | SVG | Vector |
| `logo-completo.png` | Fallback | PNG transparente | 400x120px |
| `logo-icon.svg` | Favicon, móvil | SVG | Vector cuadrado |
| `logo-icon.png` | Favicon fallback | PNG transparente | 192x192px |
| `logo-blanco.svg` | Sobre fondos oscuros | SVG | Vector |
| `logo-blanco.png` | Sobre fondos oscuros | PNG transparente | 400x120px |

### 7.2 Imágenes de Background

| Archivo | Uso | Descripción |
|---------|-----|-------------|
| `/public/images/patterns/industrial-grid.svg` | Fondos | Patrón de líneas industriales |
| `/public/images/patterns/dots.svg` | Fondos | Patrón de puntos |

---

## 8. ESPECIFICACIONES TÉCNICAS

### 8.1 Formatos Recomendados

| Tipo de Imagen | Formato | Compresión |
|----------------|---------|------------|
| Fotografías | WebP (principal) / JPG (fallback) | 80-85% calidad |
| Logos y gráficos | SVG (vectores) / PNG (raster) | Sin pérdida |
| Fondos de Hero | WebP / JPG | 85-90% calidad |
| Miniaturas | WebP / JPG | 75-80% calidad |

### 8.2 Optimización

1. **Next.js Image Component:** Todas las imágenes deben usar `<Image>` de Next.js
2. **Lazy Loading:** Activado por defecto para imágenes fuera del viewport
3. **Responsive:** Proporcionar srcset para diferentes tamaños
4. **Alt Text:** Todas las imágenes deben tener texto alternativo descriptivo

### 8.3 Dimensiones por Tipo

| Contexto | Dimensiones Mínimas | Aspecto |
|----------|---------------------|---------|
| Hero Carousel | 1920x1080px | 16:9 |
| Service Cards | 800x600px | 4:3 |
| Project Gallery | 800x600px | 4:3 |
| Team Photos | 400x500px | 4:5 |
| Client Logos | 200x100px | 2:1 |
| Thumbnails | 400x300px | 4:3 |

---

## 9. PRIORIDADES DE IMPLEMENTACIÓN

### Fase 1 (Alta Prioridad) - Lanzamiento Inicial
- [ ] 3 imágenes de Hero Carousel
- [ ] 4 imágenes de servicios principales
- [ ] Logo de la empresa (todas las versiones)
- [ ] 6-8 logos de clientes principales

### Fase 2 (Media Prioridad) - Post-Lanzamiento
- [ ] 9 miniaturas de proyectos para carousel
- [ ] Fotos del equipo directivo
- [ ] Galería de proyectos (12-18 imágenes)
- [ ] Imágenes de certificaciones

### Fase 3 (Baja Prioridad) - Mejora Continua
- [ ] Imágenes de timeline histórico
- [ ] Galerías completas por servicio
- [ ] Imágenes de oficinas y contacto
- [ ] Patterns y elementos decorativos

---

## 10. FUENTES DE IMÁGENES

### Imágenes Originales (Preferido)
- Fotografías tomadas directamente en proyectos
- Material del brochure empresarial existente
- Sesión fotográfica profesional para equipo

### Stock Photos (Alternativa)
- **Unsplash:** https://unsplash.com (gratuito)
- **Pexels:** https://pexels.com (gratuito)
- **Shutterstock:** https://shutterstock.com (pago)
- **Getty Images:** https://gettyimages.com (pago)

**Términos de búsqueda sugeridos:**
- "oil refinery inspection"
- "industrial tank inspection"
- "NDT testing ultrasound"
- "ship hull inspection"
- "aircraft maintenance hangar"
- "welding inspection"
- "pressure vessel"
- "offshore platform"
- "cargo crane port"

---

*Documento generado: Enero 2026*
*Última actualización: Enero 31, 2026*
