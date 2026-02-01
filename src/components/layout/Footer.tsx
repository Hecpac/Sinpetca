'use client';

/**
 * Footer Component - SINPETCA
 * 
 * Features:
 * - 4-column industrial design layout
 * - Company identity with tagline
 * - Quick navigation links
 * - Contact information with Lucide icons
 * - Certifications section
 * - Legal section with sustainability policy (W3C WSG compliant)
 */

import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Instagram,
  Facebook,
  ArrowUpRight,
  Shield,
  Award,
  Leaf,
} from 'lucide-react';

// Quick navigation links
const quickLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/certificaciones', label: 'Certificaciones' },
  { href: '/contacto', label: 'Contacto' },
];

// Service links
const serviceLinks = [
  { href: '/servicios/petrolera', label: 'Industria Petrolera' },
  { href: '/servicios/naval', label: 'Industria Naval' },
  { href: '/servicios/aeronautica', label: 'Industria Aeronáutica' },
  { href: '/servicios/ndt', label: 'Ensayos No Destructivos' },
];

// Social media links
const socialLinks = [
  { href: 'https://linkedin.com/company/sinpetca', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://instagram.com/sinpetca', icon: Instagram, label: 'Instagram' },
  { href: 'https://facebook.com/sinpetca', icon: Facebook, label: 'Facebook' },
];

// Certifications
const certifications = [
  { name: 'ISO 17020', description: 'Organismos de Inspección' },
  { name: 'OMAC-N 667', description: 'Aviación Civil' },
  { name: 'API', description: 'American Petroleum Institute' },
  { name: 'ASME', description: 'Mechanical Engineers' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-industrial-dark border-t border-industrial-gray-medium"
      role="contentinfo"
      aria-label="Pie de página"
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-8">
          {/* Column 1: Company Identity */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 group mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-sinpetca-orange to-sinpetca-orange-dark rounded-lg flex items-center justify-center">
                  <span className="text-industrial-dark font-bold text-2xl">S</span>
                </div>
                <div className="absolute -inset-1 bg-sinpetca-orange/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-text-primary tracking-tight">
                  SINPETCA
                </span>
                <span className="text-xs text-text-muted uppercase tracking-wider">
                  C.A.
                </span>
              </div>
            </Link>

            {/* Tagline */}
            <p className="text-text-secondary text-sm leading-relaxed mb-6 border-l-2 border-sinpetca-orange pl-4">
              &ldquo;La calidad es nuestra máxima prioridad&rdquo;
            </p>

            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Más de 35 años brindando servicios de inspección industrial y ensayos no
              destructivos con los más altos estándares de calidad y seguridad.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-industrial-gray border border-industrial-gray-medium flex items-center justify-center text-text-muted hover:text-sinpetca-orange hover:border-sinpetca-orange transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-6">
              Navegación
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-sinpetca-orange transition-colors duration-200 text-sm inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-4 mt-8">
              Servicios
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-sinpetca-orange transition-colors duration-200 text-sm inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-6">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sinpetca-navy/30 border border-sinpetca-navy/50 flex items-center justify-center flex-shrink-0 group-hover:bg-sinpetca-orange/20 group-hover:border-sinpetca-orange transition-colors duration-200">
                    <MapPin className="w-5 h-5 text-sinpetca-orange" />
                  </div>
                  <div>
                    <span className="text-text-muted text-xs uppercase tracking-wider">
                      Dirección
                    </span>
                    <p className="text-text-secondary text-sm mt-0.5 group-hover:text-text-primary transition-colors">
                      Zona Industrial Los Pinos
                      <br />
                      Puerto La Cruz, Anzoátegui
                      <br />
                      Venezuela
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a href="tel:+58XXXXXXXXX" className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-sinpetca-navy/30 border border-sinpetca-navy/50 flex items-center justify-center flex-shrink-0 group-hover:bg-sinpetca-orange/20 group-hover:border-sinpetca-orange transition-colors duration-200">
                    <Phone className="w-5 h-5 text-sinpetca-orange" />
                  </div>
                  <div>
                    <span className="text-text-muted text-xs uppercase tracking-wider">
                      Teléfono
                    </span>
                    <p className="text-text-secondary text-sm mt-0.5 group-hover:text-text-primary transition-colors">
                      +58 XXX-XXX-XXXX
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a href="mailto:info@sinpetca.com" className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-sinpetca-navy/30 border border-sinpetca-navy/50 flex items-center justify-center flex-shrink-0 group-hover:bg-sinpetca-orange/20 group-hover:border-sinpetca-orange transition-colors duration-200">
                    <Mail className="w-5 h-5 text-sinpetca-orange" />
                  </div>
                  <div>
                    <span className="text-text-muted text-xs uppercase tracking-wider">
                      Email
                    </span>
                    <p className="text-text-secondary text-sm mt-0.5 group-hover:text-text-primary transition-colors">
                      info@sinpetca.com
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sinpetca-navy/30 border border-sinpetca-navy/50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-sinpetca-orange" />
                  </div>
                  <div>
                    <span className="text-text-muted text-xs uppercase tracking-wider">
                      Horario
                    </span>
                    <p className="text-text-secondary text-sm mt-0.5">
                      Lun - Vie: 7:00 AM - 5:00 PM
                      <br />
                      Sáb: 8:00 AM - 12:00 PM
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Certifications */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-6">
              Certificaciones
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {certifications.map(cert => (
                <div
                  key={cert.name}
                  className="p-3 sm:p-4 bg-industrial-gray border border-industrial-gray-medium rounded-lg hover:border-sinpetca-navy transition-colors duration-200"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-sinpetca-orange" />
                    <span className="text-text-primary font-semibold text-sm">{cert.name}</span>
                  </div>
                  <p className="text-text-muted text-xs">{cert.description}</p>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="mt-6 p-4 bg-gradient-to-r from-sinpetca-navy/20 to-transparent border border-sinpetca-navy/30 rounded-lg">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-sinpetca-orange" />
                <div>
                  <span className="text-text-primary font-semibold text-sm block">
                    +35 Años de Experiencia
                  </span>
                  <span className="text-text-muted text-xs">Líderes en Inspección Industrial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Legal & Sustainability */}
      <div className="border-t border-industrial-gray-medium">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-text-muted text-sm text-center md:text-left">
              © {currentYear} SINPETCA, C.A. Todos los derechos reservados.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/politica-privacidad"
                className="text-text-muted hover:text-text-secondary text-sm transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/terminos-condiciones"
                className="text-text-muted hover:text-text-secondary text-sm transition-colors"
              >
                Términos y Condiciones
              </Link>
              {/* Sustainability Policy - W3C WSG Compliance */}
              <Link
                href="/sostenibilidad"
                className="text-text-muted hover:text-sinpetca-orange text-sm transition-colors inline-flex items-center gap-1.5"
              >
                <Leaf className="w-4 h-4" />
                Política de Sostenibilidad
              </Link>
            </div>
          </div>

          {/* Digital Sustainability Statement */}
          <div className="mt-4 pt-4 border-t border-industrial-gray-medium/50">
            <p className="text-text-muted text-xs text-center flex items-center justify-center gap-2">
              <Leaf className="w-3 h-3 text-green-500" />
              Este sitio web está diseñado siguiendo principios de sostenibilidad digital (W3C WSG)
              para minimizar su huella de carbono.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
