"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

/* -------------------- SCHEMA -------------------- */
const reservationSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email"),
  phoneNumber: z.string().min(8, "Phone number is too short"),
  isVip: z.boolean(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

/* -------------------- COMPONENT -------------------- */
const ContactForm = () => {
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
      isVip: false,
    },
  });

  const isVip = watch("isVip");

  const onSubmit: SubmitHandler<ReservationFormData> = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-[100svh] bg-neutral-950 p-4 font-sans">
      <div
        className={cn(
          "w-full max-w-5xl rounded-2xl overflow-hidden border transition-all duration-700 shadow-2xl",
          !isVip
            ? "bg-neutral-900/50 border-white/10"
            : "bg-black border-[#d4af37] shadow-[0_0_40px_rgba(212,175,55,0.15)]",
        )}
      >
        <div className="flex flex-col md:grid md:grid-cols-2">
          {/* ================= IMAGE MOBILE EN HAUT ================= */}
          <div className="md:hidden h-40 w-full overflow-hidden relative mb-4">
            <div className="relative h-full w-full flex items-center justify-center">
              <img
                src="/ourImages/reservation/contact1.jpg"
                alt="Standard"
                className={cn(
                  "absolute w-full h-full object-cover transition-transform ease-in-out duration-500",
                  isVip && "-translate-x-full",
                )}
              />
              <img
                src="/ourImages/reservation/vip1.png"
                alt="VIP"
                className={cn(
                  "absolute w-full h-full object-cover transition-transform ease-in-out duration-500",
                  !isVip && "translate-x-full",
                )}
              />
            </div>
          </div>

          {/* ================= FORM SIDE ================= */}
          <div className="p-6 sm:p-8 lg:p-12 transition-colors duration-700 order-last md:order-first">
            <h2
              className={cn(
                "mb-2 text-3xl sm:text-4xl font-serif transition-colors duration-700 tracking-tight",
                isVip ? "text-[#d4af37]" : "text-white",
              )}
            >
              Reservation
              {isVip && (
                <span className="ml-3 text-[10px] uppercase tracking-[0.3em] border border-[#d4af37] px-2 py-1 rounded align-middle">
                  VIP
                </span>
              )}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-4">
                {[
                  { name: "firstName" as const, label: "First Name" },
                  { name: "lastName" as const, label: "Last Name" },
                  { name: "email" as const, label: "Email", type: "email" },
                  { name: "phoneNumber" as const, label: "Phone Number" },
                ].map((input) => (
                  <div key={input.name} className="flex flex-col gap-1.5">
                    <label
                      className={cn(
                        "text-xs font-bold uppercase tracking-widest transition-colors duration-700",
                        isVip ? "text-[#d4af37]/70" : "text-white/50",
                      )}
                    >
                      {input.label}
                    </label>

                    <Controller
                      name={input.name}
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type={input.type || "text"}
                          placeholder={`Enter your ${input.label.toLowerCase()}`}
                          className={cn(
                            "h-8 md:h-12 rounded-lg px-4 outline-none transition-all duration-500 border text-sm",
                            isVip
                              ? "bg-[#d4af37]/5 text-white border-[#d4af37]/30 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/20"
                              : "bg-white/5 text-white border-white/10 focus:border-white/30",
                          )}
                        />
                      )}
                    />

                    {errors[input.name] && (
                      <span className="text-[10px] font-bold uppercase text-red-500 mt-1">
                        {errors[input.name]?.message}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* ================= TOGGLE SELECTOR ================= */}
              <div className="pt-6">
                <div
                  className="relative grid grid-cols-2 w-full sm:w-64 p-1.5 rounded-full cursor-pointer bg-neutral-900 border border-white/10"
                  onClick={() => setValue("isVip", !isVip)}
                >
                  <span
                    className={cn(
                      "z-10 py-2.5 text-center text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-500",
                      !isVip ? "text-black" : "text-white/40",
                    )}
                  >
                    Standard
                  </span>
                  <span
                    className={cn(
                      "z-10 py-2.5 text-center text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-500",
                      isVip ? "text-black" : "text-white/40",
                    )}
                  >
                    VIP
                  </span>

                  <div
                    className={cn(
                      "absolute inset-y-1.5 left-1.5 w-[calc(50%-6px)] rounded-full transition-all duration-500 ease-out shadow-lg",
                      isVip
                        ? "translate-x-[calc(100%+6px)] bg-gradient-to-r from-[#f6e7b1] via-[#d4af37] to-[#b08243]"
                        : "bg-white",
                    )}
                  />
                </div>
              </div>

              {/* ================= SUBMIT BUTTON ================= */}
              <button
                type="submit"
                className={cn(
                  "mt-6 w-full rounded-lg py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-700 border-none",
                  isVip
                    ? "bg-gradient-to-r from-[#f6e7b1] via-[#d4af37] to-[#b08243] text-black shadow-[0_10px_20px_rgba(212,175,55,0.3)] hover:scale-[1.02]"
                    : "bg-white text-black hover:bg-gray-200",
                )}
              >
                Confirm {isVip ? "VIP" : ""} Reservation
              </button>
            </form>
          </div>

          {/* ================= IMAGE DESKTOP ================= */}
          <div className="hidden md:block h-full overflow-hidden relative flex items-center justify-center">
            <div className="relative h-full w-full">
              <img
                src="/ourImages/reservation/contact1.jpg"
                alt="Standard"
                className={cn(
                  "absolute w-full h-full object-cover transition-transform ease-in-out duration-500",
                  isVip && "-translate-x-full",
                )}
              />
              <img
                src="/ourImages/reservation/vip1.png"
                alt="VIP"
                className={cn(
                  "absolute w-full h-full object-cover transition-transform ease-in-out duration-500",
                  !isVip && "translate-x-full",
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
