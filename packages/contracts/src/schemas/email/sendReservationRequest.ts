import z from 'zod';
import { EnumSpaces } from '../../types/enums/EnumSpaces';
import { EnumEvents } from '../../types/enums/EnumEvents';

export const sendReservationRequestSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, 'First name is required')
    .max(255, 'First name must be at most 255 characters long'),
  lastName: z.string().trim().min(1, 'Last name is required').max(255, 'Last name must be at most 255 characters long'),
  email: z.email(),
  phone: z.string().trim().min(1, 'Phone is required').max(255, 'Phone must be at most 255 characters long'),
  date: z.string().trim().min(1, 'Date is required').max(255, 'Date must be at most 255 characters long'),
  time: z.string().trim().min(1, 'Time is required').max(255, 'Time must be at most 255 characters long'),
  guests: z.number().positive().max(100, 'Guests must be at most 100'),
  space: z.enum(EnumSpaces).nullable(),
  event: z.enum(EnumEvents).nullable(),
  isVip: z.boolean(),
  message: z.string().trim().max(1000, 'Message must be at most 1000 characters long').nullable(),
});

export type SendReservationRequest = z.infer<typeof sendReservationRequestSchema>;
