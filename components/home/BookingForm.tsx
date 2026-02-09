"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    eventType: string;
    eventDate: string;
    startTime: string;
    venue: string;
    expectedGuests: string;
    bandType: string;
    additionalDetails: string;
}

const initialFormData: FormData = {
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    startTime: "",
    venue: "",
    expectedGuests: "",
    bandType: "",
    additionalDetails: "",
};

const eventTypes = [
    "Concert",
    "Wedding",
    "Corporate Event",
    "Private Party",
    "Festival",
];

const guestRanges = ["50–100", "100–300", "300–500", "500+"];

const bandTypes = ["Solo", "Acoustic Band", "Full Band"];

export default function BookingForm() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        }

        if (!formData.eventType) {
            newErrors.eventType = "Please select an event type";
        }

        if (!formData.eventDate) {
            newErrors.eventDate = "Event date is required";
        }

        if (!formData.venue.trim()) {
            newErrors.venue = "Venue/Location is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData(initialFormData);
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof FormData]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    return (
        <section id="booking" className="section-padding bg-charcoal-dark relative">
            {/* Background Accent */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-smoke-dark/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-smoke-dark/5 rounded-full blur-3xl" />
            </div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-caption text-smoke mb-4">Let&apos;s Work Together</p>
                    <h2 className="heading-section text-cream mb-6">Book for Your Event</h2>
                    <p className="text-body max-w-2xl mx-auto">
                        From intimate gatherings to grand celebrations, bring the magic of
                        live music to your special occasion.
                    </p>
                </motion.div>

                <AnimatePresence mode="wait">
                    {isSuccess ? (
                        /* Success State */
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="max-w-2xl mx-auto text-center py-16"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, type: "spring" }}
                                className="w-20 h-20 rounded-full bg-cream/10 border border-cream/20 flex items-center justify-center mx-auto mb-8"
                            >
                                <svg
                                    className="w-10 h-10 text-cream"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </motion.div>
                            <h3 className="heading-section text-cream mb-4">
                                Booking Request Sent!
                            </h3>
                            <p className="text-body mb-8">
                                Thank you for your interest. Our team will review your request
                                and get back to you within 24-48 hours.
                            </p>
                            <button
                                onClick={() => setIsSuccess(false)}
                                className="btn-secondary"
                            >
                                Submit Another Request
                            </button>
                        </motion.div>
                    ) : (
                        /* Form */
                        <motion.form
                            key="form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            onSubmit={handleSubmit}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                {/* Full Name */}
                                <div>
                                    <label htmlFor="fullName" className="label-field">
                                        Full Name <span className="text-smoke-dark">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className={`input-field ${errors.fullName ? "border-red-500/50" : ""
                                            }`}
                                        placeholder="Your full name"
                                    />
                                    {errors.fullName && (
                                        <p className="text-red-400 text-sm mt-2">{errors.fullName}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="label-field">
                                        Email Address <span className="text-smoke-dark">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`input-field ${errors.email ? "border-red-500/50" : ""
                                            }`}
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && (
                                        <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="label-field">
                                        Phone Number <span className="text-smoke-dark">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`input-field ${errors.phone ? "border-red-500/50" : ""
                                            }`}
                                        placeholder="+94 77 123 4567"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-400 text-sm mt-2">{errors.phone}</p>
                                    )}
                                </div>

                                {/* Event Type */}
                                <div>
                                    <label htmlFor="eventType" className="label-field">
                                        Event Type <span className="text-smoke-dark">*</span>
                                    </label>
                                    <select
                                        id="eventType"
                                        name="eventType"
                                        value={formData.eventType}
                                        onChange={handleChange}
                                        className={`select-field ${errors.eventType ? "border-red-500/50" : ""
                                            }`}
                                    >
                                        <option value="">Select event type</option>
                                        {eventTypes.map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.eventType && (
                                        <p className="text-red-400 text-sm mt-2">{errors.eventType}</p>
                                    )}
                                </div>

                                {/* Event Date */}
                                <div>
                                    <label htmlFor="eventDate" className="label-field">
                                        Event Date <span className="text-smoke-dark">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        id="eventDate"
                                        name="eventDate"
                                        value={formData.eventDate}
                                        onChange={handleChange}
                                        className={`input-field ${errors.eventDate ? "border-red-500/50" : ""
                                            }`}
                                    />
                                    {errors.eventDate && (
                                        <p className="text-red-400 text-sm mt-2">{errors.eventDate}</p>
                                    )}
                                </div>

                                {/* Start Time */}
                                <div>
                                    <label htmlFor="startTime" className="label-field">
                                        Start Time
                                    </label>
                                    <input
                                        type="time"
                                        id="startTime"
                                        name="startTime"
                                        value={formData.startTime}
                                        onChange={handleChange}
                                        className="input-field"
                                    />
                                </div>

                                {/* Venue */}
                                <div className="md:col-span-2">
                                    <label htmlFor="venue" className="label-field">
                                        Venue / Location <span className="text-smoke-dark">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="venue"
                                        name="venue"
                                        value={formData.venue}
                                        onChange={handleChange}
                                        className={`input-field ${errors.venue ? "border-red-500/50" : ""
                                            }`}
                                        placeholder="Event venue or location"
                                    />
                                    {errors.venue && (
                                        <p className="text-red-400 text-sm mt-2">{errors.venue}</p>
                                    )}
                                </div>

                                {/* Expected Guests */}
                                <div>
                                    <label htmlFor="expectedGuests" className="label-field">
                                        Expected Guests
                                    </label>
                                    <select
                                        id="expectedGuests"
                                        name="expectedGuests"
                                        value={formData.expectedGuests}
                                        onChange={handleChange}
                                        className="select-field"
                                    >
                                        <option value="">Select guest count</option>
                                        {guestRanges.map((range) => (
                                            <option key={range} value={range}>
                                                {range}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Band Type */}
                                <div>
                                    <label htmlFor="bandType" className="label-field">
                                        Select Band
                                    </label>
                                    <select
                                        id="bandType"
                                        name="bandType"
                                        value={formData.bandType}
                                        onChange={handleChange}
                                        className="select-field"
                                    >
                                        <option value="">Select band type</option>
                                        {bandTypes.map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Additional Details */}
                                <div className="md:col-span-2">
                                    <label htmlFor="additionalDetails" className="label-field">
                                        Additional Details
                                    </label>
                                    <textarea
                                        id="additionalDetails"
                                        name="additionalDetails"
                                        value={formData.additionalDetails}
                                        onChange={handleChange}
                                        rows={4}
                                        className="input-field resize-none"
                                        placeholder="Any specific requirements, song requests, or additional information..."
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="mt-10 text-center"
                            >
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary min-w-[200px] relative"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <svg
                                                className="animate-spin w-5 h-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                />
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                                />
                                            </svg>
                                            Submitting...
                                        </span>
                                    ) : (
                                        "Submit Booking Request"
                                    )}
                                </button>
                            </motion.div>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
