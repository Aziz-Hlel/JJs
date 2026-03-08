"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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

/* -------------------- SCHEMA DE VALIDATION -------------------- */
const reservationSchema = z.object({
  firstName: z.string().min(2, "Requis"),
  lastName: z.string().min(2, "Requis"),
  email: z.string().email("Email invalide"),
  phoneNumber: z.string().min(8, "Numéro trop court"),
  place: z.string().min(1, "Choisissez un lieu"),
  guests: z.string().min(1, "Nombre requis"),
  date: z.string().min(1, "Date requise"),
  time: z.string().min(1, "Heure requise"),
  isVip: z.boolean(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

const BookingForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      place: "terrasse",
      guests: "2",
      date: "",
      time: "20:00",
      isVip: false,
    },
  });

  const isVip = watch("isVip");
  const selectedPlace = watch("place");

  // Logique d'image dynamique
  const currentImage = isVip
    ? "/ourImages/reservation/vip1.png"
    : PLACES_DATA[selectedPlace as keyof typeof PLACES_DATA]?.image ||
      "/ourImages/reservation/contact1.jpg";

  const onSubmit: SubmitHandler<ReservationFormData> = (data) => {
    console.log("Données envoyées :", data);
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
                  name="phoneNumber"
                  control={control}
                  error={errors.phoneNumber}
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
                    name="place"
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        className={cn(
                          "h-12 bg-white/5 border rounded-lg px-4 outline-none",
                          isVip
                            ? "border-[#d4af37]/30 focus:border-[#d4af37]"
                            : "border-white/10",
                        )}
                      >
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
                className={cn(
                  "w-full py-4 rounded-xl font-bold uppercase tracking-[0.2em] transition-all",
                  "text-[10px] sm:text-xs md:text-sm", // Texte très petit sur mobile, s'agrandit progressivement
                  isVip
                    ? "bg-[#d4af37] text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    : "bg-white text-black hover:bg-neutral-200",
                )}
              >
                Confirm Reservation
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
                {PLACES_DATA[selectedPlace as keyof typeof PLACES_DATA]?.label}
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
