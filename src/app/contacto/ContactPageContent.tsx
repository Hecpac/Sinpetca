'use client';

/**
 * Contact Page Content (Client Component)
 * Handles form state and interactive elements
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactPageContent() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setFormStatus('success');
            setFormData({
                name: '',
                company: '',
                email: '',
                phone: '',
                service: '',
                message: '',
            });
        } catch (error) {
            setFormStatus('error');
        }
    };

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="py-24 bg-gradient-to-b from-sinpetca-navy to-industrial-dark">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-text-primary mb-6"
                    >
                        <span className="text-sinpetca-orange">Contáctenos</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-text-secondary max-w-3xl mx-auto"
                    >
                        Estamos listos para atender sus requerimientos de inspección industrial
                    </motion.p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-industrial-gray">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form Container */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-surface-primary border border-industrial-gray-medium rounded-xl p-8"
                        >
                            <h2 className="text-2xl font-bold text-text-primary mb-6">
                                Envíenos un mensaje
                            </h2>

                            {formStatus === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-green-500/10 border border-green-500/50 rounded-lg p-8 text-center"
                                >
                                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-text-primary mb-2">¡Mensaje Enviado!</h3>
                                    <p className="text-text-secondary mb-6">
                                        Gracias por contactarnos. Nuestro equipo revisará su solicitud y le responderá a la brevedad posible.
                                    </p>
                                    <button
                                        onClick={() => setFormStatus('idle')}
                                        className="px-6 py-2 bg-sinpetca-orange text-industrial-dark font-semibold rounded-lg hover:bg-sinpetca-orange-dark transition-colors"
                                    >
                                        Enviar otro mensaje
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {formStatus === 'error' && (
                                        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-center gap-3 text-red-500 text-sm">
                                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                            Hubo un error al enviar su mensaje. Por favor intente nuevamente.
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                                                Nombre
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-industrial-gray border border-industrial-gray-medium rounded-lg text-text-primary focus:border-sinpetca-orange focus:ring-1 focus:ring-sinpetca-orange outline-none transition-colors"
                                                required
                                                disabled={formStatus === 'submitting'}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-text-secondary mb-2">
                                                Empresa
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-industrial-gray border border-industrial-gray-medium rounded-lg text-text-primary focus:border-sinpetca-orange focus:ring-1 focus:ring-sinpetca-orange outline-none transition-colors"
                                                disabled={formStatus === 'submitting'}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                                                Correo electrónico
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-industrial-gray border border-industrial-gray-medium rounded-lg text-text-primary focus:border-sinpetca-orange focus:ring-1 focus:ring-sinpetca-orange outline-none transition-colors"
                                                required
                                                disabled={formStatus === 'submitting'}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2">
                                                Teléfono
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-industrial-gray border border-industrial-gray-medium rounded-lg text-text-primary focus:border-sinpetca-orange focus:ring-1 focus:ring-sinpetca-orange outline-none transition-colors"
                                                disabled={formStatus === 'submitting'}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-text-secondary mb-2">
                                            Servicio de interés
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-industrial-gray border border-industrial-gray-medium rounded-lg text-text-primary focus:border-sinpetca-orange focus:ring-1 focus:ring-sinpetca-orange outline-none transition-colors cursor-pointer"
                                            disabled={formStatus === 'submitting'}
                                        >
                                            <option value="">Seleccione un servicio</option>
                                            <option value="petrolera">Inspección Petrolera</option>
                                            <option value="naval">Inspección Naval</option>
                                            <option value="aeronautica">Inspección Aeronáutica</option>
                                            <option value="ndt">Ensayos No Destructivos</option>
                                            <option value="otro">Otro</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                                            Mensaje
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-industrial-gray border border-industrial-gray-medium rounded-lg text-text-primary focus:border-sinpetca-orange focus:ring-1 focus:ring-sinpetca-orange outline-none transition-colors resize-none"
                                            required
                                            disabled={formStatus === 'submitting'}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formStatus === 'submitting'}
                                        className="w-full px-8 py-4 bg-sinpetca-orange hover:bg-sinpetca-orange-dark disabled:bg-industrial-gray-medium disabled:text-text-muted text-industrial-dark font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-3 group"
                                    >
                                        {formStatus === 'submitting' ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                    className="w-5 h-5 border-2 border-industrial-dark/30 border-t-industrial-dark rounded-full"
                                                />
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                Enviar mensaje
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div className="bg-surface-primary border border-industrial-gray-medium rounded-xl p-8">
                                <h2 className="text-2xl font-bold text-text-primary mb-6">
                                    Información de contacto
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 bg-sinpetca-navy/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sinpetca-orange/20 transition-colors">
                                            <MapPin className="w-6 h-6 text-sinpetca-orange" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-text-primary mb-1">Dirección</h3>
                                            <p className="text-text-secondary leading-relaxed">
                                                Zona Industrial Los Pinos
                                                <br />
                                                Puerto La Cruz, Anzoátegui
                                                <br />
                                                Venezuela
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 bg-sinpetca-navy/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sinpetca-orange/20 transition-colors">
                                            <Phone className="w-6 h-6 text-sinpetca-orange" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-text-primary mb-1">Teléfono</h3>
                                            <p className="text-text-secondary">+58 281 267 1109</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 bg-sinpetca-navy/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sinpetca-orange/20 transition-colors">
                                            <Mail className="w-6 h-6 text-sinpetca-orange" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-text-primary mb-1">
                                                Correo electrónico
                                            </h3>
                                            <p className="text-text-secondary">info@sinpetca.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 bg-sinpetca-navy/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sinpetca-orange/20 transition-colors">
                                            <Clock className="w-6 h-6 text-sinpetca-orange" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-text-primary mb-1">Horario</h3>
                                            <p className="text-text-secondary">
                                                Lunes - Viernes: 7:00 AM - 5:00 PM
                                                <br />
                                                Sábado: 8:00 AM - 12:00 PM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="bg-surface-primary border border-industrial-gray-medium rounded-xl overflow-hidden group">
                                <div className="aspect-video bg-industrial-gray-medium flex flex-col items-center justify-center p-8 text-center">
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="mb-4"
                                    >
                                        <MapPin className="w-12 h-12 text-sinpetca-orange/50" />
                                    </motion.div>
                                    <p className="text-text-muted">Mapa interactivo de ubicación física</p>
                                    <p className="text-text-muted text-sm mt-2">Puerto La Cruz, Venezuela</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
