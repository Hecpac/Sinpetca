'use client';

/**
 * Navbar Component - SINPETCA
 *
 * Floating Pill Navbar with Left Sidebar
 * - Glassmorphism effect
 * - Left sidebar with vertical text and indicators
 * - Main horizontal navbar
 * - Responsive mobile menu
 */

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Fuel,
  Ship,
  Plane,
  ScanLine,
  Phone,
} from 'lucide-react';

// Navigation links configuration
const mainNavLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios', hasDropdown: true },
  { href: '/certificaciones', label: 'Certificaciones' },
  { href: '/contacto', label: 'Contacto' },
];

// Services mega menu configuration
const servicesMenu = [
  {
    href: '/servicios/petrolera',
    label: 'Industria Petrolera',
    description: 'Inspección API/ASME, tanques y tuberías',
    icon: Fuel,
  },
  {
    href: '/servicios/naval',
    label: 'Industria Naval',
    description: 'Certificación de grúas y estructuras marítimas',
    icon: Ship,
  },
  {
    href: '/servicios/aeronautica',
    label: 'Industria Aeronáutica',
    description: 'Certificación OMAC-N 667 para aviación',
    icon: Plane,
  },
  {
    href: '/servicios/ndt',
    label: 'Ensayos No Destructivos',
    description: 'UT, RT, PT, MT y más métodos NDT',
    icon: ScanLine,
  },
];

// Animation variants
const mobileMenuVariants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: { duration: 0.3, ease: 'easeInOut' as const },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: 'easeInOut' as const },
  },
};

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.2, ease: 'easeOut' as const },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: 'easeOut' as const },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  // Get current slide index based on pathname for indicators
  const getCurrentIndex = () => {
    const index = mainNavLinks.findIndex(link => isActiveLink(link.href));
    return index >= 0 ? index : 0;
  };

  return (
    <>
      {/* LEFT SIDEBAR - Full height, hidden on mobile */}
      <aside className="hidden lg:flex fixed left-5 top-4 bottom-4 w-12 flex-col items-center bg-black/60 backdrop-blur-xl border border-white/10 rounded-[24px] py-6 z-50">
        {/* Logo Icon */}
        <div className="w-8 h-8 bg-gradient-to-br from-sinpetca-orange to-sinpetca-orange-dark rounded-lg flex items-center justify-center">
          <span className="text-industrial-dark font-bold text-sm">S</span>
        </div>

        {/* Vertical Text */}
        <div className="flex-1 flex items-center justify-center">
          <span
            className="text-white/60 text-[10px] font-medium uppercase tracking-[3px] whitespace-nowrap"
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
            }}
          >
            Inspección Industrial
          </span>
        </div>

        {/* Navigation Indicators */}
        <div className="flex flex-col gap-2">
          {mainNavLinks.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                getCurrentIndex() === index
                  ? 'bg-sinpetca-orange'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </aside>

      {/* MAIN NAVBAR */}
      <header
        role="banner"
        className="fixed top-4 left-4 right-4 lg:left-[76px] lg:right-5 z-50"
      >
        <nav
          className={`
            flex items-center justify-between
            bg-black/50 backdrop-blur-xl
            border border-white/10
            rounded-[24px]
            px-4 lg:px-6 h-14 lg:h-16
            transition-all duration-300
            ${isScrolled ? 'bg-black/70' : ''}
          `}
          role="navigation"
          aria-label="Navegación principal"
        >
            {/* Logo - Mobile & Desktop */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="SINPETCA - Ir al inicio"
            >
              {/* Mobile logo icon */}
              <div className="lg:hidden w-8 h-8 bg-gradient-to-br from-sinpetca-orange to-sinpetca-orange-dark rounded-lg flex items-center justify-center">
                <span className="text-industrial-dark font-bold text-sm">S</span>
              </div>
              <span className="text-lg font-bold text-text-primary tracking-tight">
                SINPETCA
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {mainNavLinks.map(link => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
                >
                  {link.hasDropdown ? (
                    <>
                      <button
                        className={`
                          flex items-center gap-1 px-3 py-1.5 rounded-full
                          text-sm font-medium transition-all duration-200
                          ${
                            isActiveLink(link.href)
                              ? 'text-sinpetca-orange bg-white/10'
                              : 'text-text-secondary hover:text-text-primary hover:bg-white/10'
                          }
                        `}
                        aria-expanded={isServicesOpen}
                        aria-haspopup="true"
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-3 h-3 transition-transform duration-200 ${
                            isServicesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Mega Menu Dropdown */}
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[500px]"
                          >
                            <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/30 overflow-hidden">
                              <div className="p-2">
                                <div className="grid grid-cols-2 gap-1">
                                  {servicesMenu.map(service => (
                                    <Link
                                      key={service.href}
                                      href={service.href}
                                      className="group flex items-start gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors duration-200"
                                    >
                                      <div className="w-10 h-10 rounded-lg bg-sinpetca-navy/50 border border-sinpetca-navy flex items-center justify-center flex-shrink-0 group-hover:bg-sinpetca-orange/20 group-hover:border-sinpetca-orange transition-colors duration-200">
                                        <service.icon className="w-5 h-5 text-sinpetca-orange" />
                                      </div>
                                      <div>
                                        <span className="block text-sm font-semibold text-text-primary group-hover:text-sinpetca-orange transition-colors">
                                          {service.label}
                                        </span>
                                        <span className="block text-xs text-text-muted mt-0.5">
                                          {service.description}
                                        </span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                              <div className="bg-white/5 px-4 py-3 border-t border-white/10">
                                <Link
                                  href="/servicios"
                                  className="text-sm text-sinpetca-orange hover:text-sinpetca-orange-light font-medium flex items-center gap-2"
                                >
                                  Ver todos los servicios
                                  <ChevronDown className="w-4 h-4 -rotate-90" />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`
                        px-3 py-1.5 rounded-full text-sm font-medium
                        transition-all duration-200
                        ${
                          isActiveLink(link.href)
                            ? 'text-sinpetca-orange bg-white/10'
                            : 'text-text-secondary hover:text-text-primary hover:bg-white/10'
                        }
                      `}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Section: CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contacto"
                className="
                  inline-flex items-center gap-2 px-5 py-2
                  bg-sinpetca-orange hover:bg-sinpetca-orange-dark
                  text-industrial-dark font-semibold text-sm
                  rounded-full transition-all duration-300
                  hover:scale-105
                "
              >
                <Phone className="w-4 h-4" />
                Cotizar
              </Link>
            </div>

            {/* Mobile Menu Toggle - 44px touch target */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden w-11 h-11 flex items-center justify-center text-text-primary hover:bg-white/10 rounded-lg transition-colors"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={toggleMobileMenu}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden overflow-y-auto"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <span className="text-lg font-bold text-text-primary">Menú</span>
                <button
                  onClick={toggleMobileMenu}
                  className="w-11 h-11 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="w-6 h-6 text-text-primary" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="p-4">
                <ul className="space-y-1">
                  {mainNavLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      custom={index}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {link.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                            className={`
                              w-full flex items-center justify-between px-4 py-3 min-h-[48px] rounded-xl
                              text-base font-medium transition-colors
                              ${
                                isActiveLink(link.href)
                                  ? 'text-sinpetca-orange bg-sinpetca-orange/10'
                                  : 'text-text-primary hover:bg-white/5'
                              }
                            `}
                          >
                            {link.label}
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-200 ${
                                isMobileServicesOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          {/* Mobile Services Submenu */}
                          <AnimatePresence>
                            {isMobileServicesOpen && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 py-2 space-y-1">
                                  {servicesMenu.map(service => (
                                    <li key={service.href}>
                                      <Link
                                        href={service.href}
                                        className="flex items-center gap-3 px-4 py-3 min-h-[48px] rounded-xl text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors"
                                      >
                                        <service.icon className="w-5 h-5 text-sinpetca-orange" />
                                        <span className="text-base">{service.label}</span>
                                      </Link>
                                    </li>
                                  ))}
                                  <li>
                                    <Link
                                      href="/servicios"
                                      className="flex items-center gap-3 px-4 py-3 min-h-[48px] rounded-xl text-sinpetca-orange hover:bg-sinpetca-orange/10 transition-colors"
                                    >
                                      <span className="text-base font-medium">Ver todos</span>
                                    </Link>
                                  </li>
                                </div>
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className={`
                            block px-4 py-3 min-h-[48px] flex items-center rounded-xl text-base font-medium
                            transition-colors
                            ${
                              isActiveLink(link.href)
                                ? 'text-sinpetca-orange bg-sinpetca-orange/10'
                                : 'text-text-primary hover:bg-white/5'
                            }
                          `}
                        >
                          {link.label}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile CTA */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <Link
                    href="/contacto"
                    className="
                      flex items-center justify-center gap-2 w-full px-6 py-4
                      bg-sinpetca-orange hover:bg-sinpetca-orange-dark
                      text-industrial-dark font-semibold
                      rounded-full transition-colors
                    "
                  >
                    <Phone className="w-5 h-5" />
                    Solicitar Cotización
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20 lg:h-24" />
    </>
  );
}
