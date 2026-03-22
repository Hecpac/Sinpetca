'use client';

import { MessageCircleMore } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { WHATSAPP_URL } from '@/lib/site-config';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir chat de WhatsApp con SINPETCA"
      onClick={() =>
        trackEvent('cta_whatsapp_click', {
          source: 'floating_whatsapp',
          target: WHATSAPP_URL,
        })
      }
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-3 rounded-full border border-[#25D366]/30 bg-[#25D366] px-4 py-3 text-sm font-semibold text-industrial-dark shadow-[0_16px_40px_rgba(37,211,102,0.28)] transition-transform duration-300 hover:-translate-y-0.5"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
        <MessageCircleMore className="h-5 w-5" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
