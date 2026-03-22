export const SITE_NAME = 'SINPETCA, C.A.';
export const SITE_URL = 'https://sinpetca.com';

export const COMPANY_FOUNDING_YEAR = 2012;
export const COMPANY_EXPERIENCE_YEARS = Math.max(new Date().getFullYear() - COMPANY_FOUNDING_YEAR, 1);
export const COMPANY_EXPERIENCE_LABEL = `${COMPANY_EXPERIENCE_YEARS}+`;
export const COMPANY_EXPERIENCE_COPY = `Más de ${COMPANY_EXPERIENCE_YEARS} años`;

export const CONTACT_EMAIL = 'sinpetca68@gmail.com';
export const CONTACT_PHONE_TEL = 'tel:+584141995127';
export const CONTACT_PHONE_SCHEMA = '+58-414-1995127';
export const CONTACT_PHONE_DISPLAY = '+58 414-199-5127';
export const CONTACT_PHONE_PLAIN = '+58 414 199 5127';

export const WHATSAPP_PHONE = '584141995127';
export const WHATSAPP_MESSAGE =
  'Hola, me gustaría solicitar información sobre los servicios de inspección industrial de SINPETCA.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/sinpetca',
  instagram: 'https://instagram.com/sinpetca',
  facebook: 'https://facebook.com/sinpetca',
} as const;

function createGoogleMapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export const PRIMARY_OFFICE = {
  label: 'Punto Fijo',
  shortAddress: 'Calle Guarnica, Qta. Adriana, s/n, Urb. Santa Fe.',
  fullAddress: 'Calle Guarnica, Qta. Adriana, s/n, Urb. Santa Fe, Punto Fijo, Falcón, Venezuela.',
  locality: 'Punto Fijo',
  region: 'Falcón',
  postalCode: '6023',
  mapUrl: createGoogleMapsSearchUrl(
    'Calle Guarnica, Qta. Adriana, Urb. Santa Fe, Punto Fijo, Falcon, Venezuela'
  ),
} as const;

export const SECONDARY_OFFICE = {
  label: 'Lechería',
  shortAddress: 'Av. Intercomunal Jorge Rodríguez, C.C. MT, Piso 1, Ofic. P1-26.',
  fullAddress:
    'Av. Intercomunal Jorge Rodríguez, C.C. MT, Piso 1, Ofic. P1-26, Lechería, Anzoátegui, Venezuela.',
  locality: 'Lechería',
  region: 'Anzoátegui',
  mapUrl: createGoogleMapsSearchUrl(
    'Av. Intercomunal Jorge Rodriguez, C.C. MT, Piso 1, Ofic. P1-26, Lecheria, Anzoategui, Venezuela'
  ),
} as const;

export const BUSINESS_HOURS = {
  weekdaysShort: 'Lun - Vie: 7:00 AM - 5:00 PM',
  saturdayShort: 'Sáb: 8:00 AM - 12:00 PM',
  weekdaysLong: 'Lunes - Viernes: 7:00 AM - 5:00 PM',
  saturdayLong: 'Sábado: 8:00 AM - 12:00 PM',
} as const;

export function getCanonicalUrl(path: string = '/') {
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`;
}
