export const CONTACT_NAME_MIN_LENGTH = 2;
export const CONTACT_NAME_MAX_LENGTH = 120;
export const CONTACT_MESSAGE_MIN_LENGTH = 4;
export const CONTACT_MESSAGE_MAX_LENGTH = 3000;
export const CONTACT_COMPANY_MAX_LENGTH = 120;
export const CONTACT_PHONE_MAX_LENGTH = 50;

export function getContactMessageLengthError(messageLength: number): string | null {
  if (messageLength < CONTACT_MESSAGE_MIN_LENGTH) {
    return `El mensaje debe tener al menos ${CONTACT_MESSAGE_MIN_LENGTH} caracteres.`;
  }

  if (messageLength > CONTACT_MESSAGE_MAX_LENGTH) {
    return `El mensaje no puede superar ${CONTACT_MESSAGE_MAX_LENGTH} caracteres.`;
  }

  return null;
}
