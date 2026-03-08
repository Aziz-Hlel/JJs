import { ContactUsFormValues } from '@/app/blocks/contact/ContactUsFrom';

export async function sendContactMessage(data: ContactUsFormValues) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Failed to send message');
  }

  return res.json();
}
