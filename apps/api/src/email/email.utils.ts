import { SendContactUsRequest } from '@contracts/schemas/email/sendContactUsRequest';
import { SendReservationRequest } from '@contracts/schemas/email/sendReservationRequest';

class EmailUtils {
  createContactUsHtml(payload: SendContactUsRequest) {
    const { email, name, subject, message } = payload;
    const html = `
        <h1>Contact Us</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        `;
    return html;
  }

  createReservationHtml(payload: SendReservationRequest) {
    const { firstName, lastName, email, phone, date, time, guests, space, event, isVip, message } = payload;
    const html = `
        <h1>Reservation Request</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Space:</strong> ${space}</p>
        <p><strong>Event:</strong> ${event}</p>
        <p><strong>VIP:</strong> ${isVip ? 'Yes' : 'No'}</p>
        <p><strong>Message:</strong> ${message}</p>
        `;
    return html;
  }
}

export const emailUtils = new EmailUtils();
