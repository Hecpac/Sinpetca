# Frontend Design Skill - SINPETCA

Guías y mejores prácticas para diseño frontend, tipografía, animaciones y calidad visual.

---

## Skills y Subagentes Relevantes

### Diseño y sistema visual
- Sistema de diseño definido en `globals.css`
- Tokens de color, tipografía y spacing
- Componentes reutilizables con Tailwind CSS v4

### Performance, calidad y accesibilidad
- Next.js 16 con App Router
- Framer Motion para animaciones
- WCAG 2.2 AA como objetivo

### Componentes y UX
- Componentes server/client separados
- Estados hover/focus/active
- Mobile-first approach

---

## Sistema de Diseño SINPETCA

### Colores Principales
```css
--sinpetca-navy: #0D3B66;      /* Primary */
--sinpetca-orange: #F5A623;    /* Accent */
--industrial-dark: #121212;    /* Background */
--text-primary: #FFFFFF;
--text-secondary: #B0B0B0;
```

### Tipografía
- **Font Family:** Montserrat
- **Headings:** Bold, tight line-height
- **Body:** Regular, relaxed line-height

### Spacing
- Section padding: `py-24`
- Component gap: `gap-6` o `gap-8`
- Container: `container mx-auto px-4 lg:px-8`

---

## Notas para Animaciones

### Framer Motion
- Usar `useInView` para animaciones on-scroll
- Transiciones suaves: `duration: 0.5`
- Stagger para listas: `delay: index * 0.1`

### Reglas
- Respetar `prefers-reduced-motion`
- Animaciones sutiles, no distractoras
- No bloquear interacción durante animaciones

---

## Checklist de Calidad Visual

- [ ] Contraste adecuado (WCAG AA)
- [ ] Jerarquía visual clara
- [ ] Espaciado consistente
- [ ] Responsive en todos los breakpoints
- [ ] Estados hover/focus visibles
- [ ] Imágenes optimizadas
- [ ] Fuentes con font-display: swap
