import type { Metadata } from 'next';
import { LocalBusinessMarkup } from '@/components/seo/SchemaMarkup';
import { sinpetcaLocalBusiness } from '@/lib/schema-data';
import ContactPageContent from './ContactPageContent';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contáctenos para solicitar cotizaciones de servicios de inspección industrial y ensayos no destructivos. Ubicados en Puerto La Cruz, Venezuela.',
  alternates: {
    canonical: 'https://sinpetca.com/contacto',
  },
};

export default function ContactoPage() {
  return (
    <>
      <LocalBusinessMarkup business={sinpetcaLocalBusiness} />
      <ContactPageContent />
    </>
  );
}
