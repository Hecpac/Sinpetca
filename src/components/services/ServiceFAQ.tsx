'use client';

/**
 * Service FAQ Component
 * Accordion-style FAQ with Schema Markup support
 */

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQMarkup } from '@/components/seo/SchemaMarkup';

export interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  title: string;
  subtitle: string;
  faqs: FAQItem[];
}

function FAQAccordion({ faq, isOpen, onToggle, index }: {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border border-industrial-gray-medium rounded-xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left bg-surface-primary hover:bg-industrial-gray-light transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-text-primary font-medium pr-4">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-sinpetca-orange flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 bg-surface-primary">
              <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ServiceFAQ({ title, subtitle, faqs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-24 bg-industrial-gray">
      {/* FAQ Schema Markup */}
      <FAQMarkup faqs={faqs} />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sinpetca-orange/10 border border-sinpetca-orange/30 rounded-full text-sinpetca-orange text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              {subtitle}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              {title}
            </h2>
          </motion.div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQAccordion
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
