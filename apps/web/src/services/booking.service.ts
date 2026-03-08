import { ReservationFormData } from "@/app/blocks/Booking/BookingForm";


export default async function sendBookingRequest(data: ReservationFormData) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/email/reservation`, {
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