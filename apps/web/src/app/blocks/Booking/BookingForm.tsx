"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import sendBookingRequest from "@/services/booking.service";
import { toast } from "sonner";

/* -------------------- CONFIGURATION DES LIEUX -------------------- */
const PLACES_DATA = {
  terrasse: { label: "Live Sports Bar", image: "/ourImages/band/sport.jfif" },

  piscine: {
    label: "Whiskey Bar",
    image: "/ourImages/band/whiskybar.jfif",
  },
  pub: {
    label: "Main Bar & Restaurant",
    image: "/ourImages/band/pubbar.jfif",
  },
  vip_lounge: { label: "Salon VIP", image: "/ourImages/reservation/vip1.png" },
};
const EnumSpaces = {
  SPORTS: 'SPORTS',
  WHISKEY: 'WHISKEY',
  MAIN: 'MAIN',
  VIP: 'VIP',
} as const;

export const EnumEvents = {
  BIRTHDAY: 'BIRTHDAY',
  ANNIVERSARY: 'ANNIVERSARY',
  DATE: 'DATE',
  CELEBRATION: 'CELEBRATION',
  BUSINESS: 'BUSINESS',
  OTHER: 'OTHER',
} as const;

/* -------------------- SCHEMA DE VALIDATION -------------------- */
const reservationSchema = z.object({
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
  space: z.enum(EnumSpaces).nullable().optional(),
  event: z.enum(EnumEvents).nullable().optional(),
  isVip: z.boolean(),
  message: z.string().trim().max(1000, 'Message must be at most 1000 characters long').nullable().optional(),
});

export type ReservationFormData = z.infer<typeof reservationSchema>;

const BookingForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      date: "",
      time: "20:00",
      guests: 2,
      space: "MAIN",
      event: null,
      isVip: false,
      message: "",
    },
  });

  const isVip = watch("isVip");
  const selectedEvent = watch("event");

  // Logique d'image dynamique
  const currentImage = isVip
    ? "/ourImages/reservation/vip1.png"
    : PLACES_DATA[selectedEvent as keyof typeof PLACES_DATA]?.image ||
    "/ourImages/reservation/contact1.jpg";

  const onSubmit: SubmitHandler<ReservationFormData> = async (data) => {
    try {
      await sendBookingRequest(data);
      toast.success("Reservation request sent successfully", {
        description: "We will get back to you as soon as possible",
      });
    } catch (error) {
      toast.error("Failed to send reservation request", {
        description: "Please try again later",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4 font-sans text-white">
      <div
        className={cn(
          "w-full max-w-6xl rounded-3xl overflow-hidden border transition-all duration-700 shadow-2xl bg-neutral-900/80",
          isVip
            ? "border-[#d4af37] shadow-[0_0_50px_rgba(212,175,55,0.2)]"
            : "border-white/10",
        )}
      >
        <div className="flex flex-col md:grid md:grid-cols-12">
          {/* ================= FORM SIDE (7 COLUMNS) ================= */}
          <div className="md:col-span-7 p-6 md:p-12">
            <header className="mb-8">
              <h2
                className={cn(
                  "text-4xl font-serif mb-2",
                  isVip ? "text-[#d4af37]" : "text-white",
                )}
              >
                Reservation{" "}
                {isVip && (
                  <span className="text-sm border border-[#d4af37] px-2 py-1 rounded ml-2">
                    VIP
                  </span>
                )}
              </h2>
              <p className="text-white/40 text-sm italic">
                Veuillez remplir les détails de votre visite.
              </p>
            </header>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* ROW 1: Names */}
              <div className="grid grid-cols-2 gap-4">
                <CustomInput
                  label="First Name"
                  name="firstName"
                  control={control}
                  error={errors.firstName}
                  isVip={isVip}
                />
                <CustomInput
                  label="Last Name"
                  name="lastName"
                  control={control}
                  error={errors.lastName}
                  isVip={isVip}
                />
              </div>

              {/* ROW 2: Contact */}
              <div className="grid grid-cols-2 gap-4">
                <CustomInput
                  label="Email"
                  name="email"
                  type="email"
                  control={control}
                  error={errors.email}
                  isVip={isVip}
                />
                <CustomInput
                  label="Phone Number"
                  name="phone"
                  control={control}
                  error={errors.phone}
                  isVip={isVip}
                />
              </div>

              {/* ROW 3: Place & Guests */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                    Select Place
                  </label>
                  <Controller
                    name="space"
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        value={field.value ?? undefined}
                        className={cn(
                          "h-12 bg-white/5 border rounded-lg px-4 outline-none",
                          isVip
                            ? "border-[#d4af37]/30 focus:border-[#d4af37]"
                            : "border-white/10",
                        )}
                      >
                        <option value={undefined}></option>
                        {Object.entries(PLACES_DATA).map(([key, val]) => (
                          <option
                            key={key}
                            value={key}
                            className="bg-neutral-900"
                          >
                            {val.label}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                </div>
                <CustomInput
                  label="Number of Guests"
                  name="guests"
                  type="number"
                  control={control}
                  error={errors.guests}
                  isVip={isVip}
                />
              </div>

              {/* ROW 4: Date & Time (PM) */}
              <div className="grid grid-cols-2 gap-4">
                <CustomInput
                  label="Date"
                  name="date"
                  type="date"
                  control={control}
                  error={errors.date}
                  isVip={isVip}
                />
                <CustomInput
                  label="Time (PM)"
                  name="time"
                  type="time"
                  control={control}
                  error={errors.time}
                  isVip={isVip}
                />
              </div>

              <div>
                <Controller
                  name="event"
                  control={control}
                  render={({ field }) => (
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                        Select Event
                      </label>
                      <select
                        {...field}
                        value={field.value ?? undefined}
                        className={cn(
                          "h-12 bg-white/5 border rounded-lg px-4 outline-none",
                          isVip
                            ? "border-[#d4af37]/30 focus:border-[#d4af37]"
                            : "border-white/10",
                        )}
                      >
                        <option className="bg-neutral-900" value={undefined}>   </option>
                        {Object.entries(EnumEvents).map(([key, val]) => (
                          <option
                            key={key}
                            value={key}
                            className="bg-neutral-900"
                          >
                            {val.toLowerCase()}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                />
              </div>

              <div>
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                        Message
                      </label>
                      <textarea
                        {...field}
                        value={field.value ?? undefined}
                        className={cn(
                          "h-24 bg-white/5 border rounded-lg px-4 outline-none",
                          isVip
                            ? "border-[#d4af37]/30 focus:border-[#d4af37]"
                            : "border-white/10",
                        )}
                      ></textarea>
                    </div>
                  )}
                />
              </div>
              {/* VIP TOGGLE BUTTON */}
              <button
                type="button"
                onClick={() => setValue("isVip", !isVip)}
                className={cn(
                  "w-full py-3 rounded-xl border text-[10px] font-bold tracking-widest transition-all",
                  isVip
                    ? "bg-[#d4af37]/10 border-[#d4af37] text-[#d4af37]"
                    : "bg-white/5 border-white/10 text-white/40",
                )}
              >
                {isVip ? "✨ VIP ACCESS GRANTED" : "UPGRADE TO VIP"}
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-4 rounded-xl font-bold uppercase tracking-[0.2em] transition-all",
                  "text-[10px] sm:text-xs md:text-sm", // Texte très petit sur mobile, s'agrandit progressivement
                  isVip
                    ? "bg-[#d4af37] text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    : "bg-white text-black hover:bg-neutral-200",
                )}
              >
                {isSubmitting ? "Submitting..." : "Confirm Reservation"}
              </button>
            </form>
          </div>

          {/* ================= IMAGE SIDE (5 COLUMNS) ================= */}
          <div className="md:col-span-5 relative hidden md:block group">
            <img
              key={currentImage}
              src={currentImage}
              alt="Lieu sélectionné"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out scale-100 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-10 left-10 right-10 p-6 backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl">
              <p className="text-[10px] uppercase tracking-widest opacity-60">
                You are booking for:
              </p>
              <h3 className="text-2xl font-serif text-[#d4af37]">
                {selectedEvent ? PLACES_DATA[selectedEvent as keyof typeof PLACES_DATA]?.label : ""}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- Petit composant interne pour éviter la répétition des champs --- */
const CustomInput = ({
  label,
  name,
  control,
  error,
  type = "text",
  isVip,
}: any) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">
      {label}
    </label>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <input
          {...field}
          type={type}
          className={cn(
            "h-12 bg-white/5 border rounded-lg px-4 outline-none transition-all text-sm",
            isVip
              ? "border-[#d4af37]/30 focus:border-[#d4af37]"
              : "border-white/10 focus:border-white/30",
          )}
        />
      )}
    />
    {error && (
      <span className="text-[10px] text-red-500 uppercase font-bold">
        {error.message}
      </span>
    )}
  </div>
);

export default BookingForm;
