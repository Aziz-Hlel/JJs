const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const CODE_LENGTH = 3;

export function generateOfferReferenceCode(): string {
  let code = '';

  for (let i = 0; i < CODE_LENGTH; i++) {
    const index = Math.floor(Math.random() * ALPHABET.length);
    code += ALPHABET[index];
  }

  return code;
}
