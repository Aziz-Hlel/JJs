"use client";

import { Clock, Send } from 'lucide-react'
import React from 'react'
import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendContactMessage } from '@/services/contact.service';

export const sendContactUsRequestSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, 'Name must be at least 3 characters long')
        .max(255, 'Name must be at most 255 characters long'),
    email: z.email('Please enter a valid email address'),
    subject: z
        .string()
        .trim()
        .min(3, 'Subject must be at least 3 characters long')
        .max(255, 'Subject must be at most 255 characters long'),
    message: z
        .string()
        .trim()
        .min(5, 'Message must be at least 5 characters long')
        .max(1000, 'Message must be at most 1000 characters long'),
});

export type ContactUsFormValues = z.infer<typeof sendContactUsRequestSchema>;

const ContactUsFrom = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactUsFormValues>({
        resolver: zodResolver(sendContactUsRequestSchema),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        }
    });

    const onSubmit = async (data: ContactUsFormValues) => {
        try {
            const res = await sendContactMessage(data);
            toast.success("Message sent successfully");
            reset();
        } catch (error) {

            toast.error("Failed to send message, please try again later");
        }

    };

    return (
        <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* --- LEFT: FORM --- */}
            <div className="w-full lg:w-5/12">
                <span className="text-[#348056] font-bold tracking-[0.2em] uppercase text-xs">
                    Contact Form
                </span>
                <h2 className="text-5xl font-serif font-bold text-[#e7d8c3] mt-4 mb-8 leading-tight">
                    Send message
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative">
                        <input
                            {...register('name')}
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-transparent border-2 border-gray-200 rounded-xl px-4 py-4 focus:border-[#e7d8c3] text-white outline-none transition-colors"
                        />
                        {errors.name && <span className="text-red-500 text-sm mt-1 block">{errors.name.message}</span>}
                    </div>
                    <div className="relative">
                        <input
                            {...register('email')}
                            type="email"
                            placeholder="Email Address"
                            className="w-full bg-transparent border-2 border-gray-200 rounded-xl px-4 py-4 focus:border-[#b08243] text-white outline-none transition-colors"
                        />
                        {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email.message}</span>}
                    </div>
                    <div className="relative">
                        <input
                            {...register('subject')}
                            type="text"
                            placeholder="Subject"
                            className="w-full bg-transparent border-2 border-gray-200 rounded-xl px-4 py-4 focus:border-[#e7d8c3] text-white outline-none transition-colors"
                        />
                        {errors.subject && <span className="text-red-500 text-sm mt-1 block">{errors.subject.message}</span>}
                    </div>
                    <div className="relative">
                        <textarea
                            {...register('message')}
                            rows={4}
                            placeholder="How can we help you?"
                            className="w-full bg-transparent border-2 border-gray-200 rounded-2xl px-4 py-4 focus:border-[#b08243] text-white outline-none transition-colors resize-none"
                        ></textarea>
                        {errors.message && <span className="text-red-500 text-sm mt-1 block">{errors.message.message}</span>}
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex items-center gap-3 bg-[#b08243] text-white px-8 py-4 rounded-full hover:bg-transparent hover:border-2 hover:border-[#b08243] transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span className="font-bold">{isSubmitting ? "Sending..." : "Send Message"}</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </div>

            {/* --- RIGHT: MAP SECTION --- */}
            <div className="w-full lg:w-7/12 h-[600px] relative rounded-[2rem] overflow-hidden shadow-2xl">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.47!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v123456789"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Location Map"
                    className="grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                    <div className="flex items-center gap-4">
                        <div className="bg-green-100 text-green-600 p-2 rounded-full">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-bold text-[#1A3030]">Open Now</p>
                            <p className="text-sm text-gray-500">
                                Closing today at 11:00 PM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsFrom