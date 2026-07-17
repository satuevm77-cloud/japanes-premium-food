"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, X } from "lucide-react";
import { FormEvent, useState } from "react";

import { LuxuryButton } from "@/components/ui/LuxuryButton";

const fieldClass =
  "w-full rounded-sm border border-premiumWhite/12 bg-obsidian/55 px-4 py-3 text-sm text-premiumWhite placeholder:text-warmGray/65 transition focus:border-gold focus:outline-none";

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-premiumWhite/10 bg-premiumWhite/[0.035] p-5 shadow-emerald sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-warmGray">
            <span>Name</span>
            <input name="name" required placeholder="Your name" className={fieldClass} />
          </label>
          <label className="space-y-2 text-sm text-warmGray">
            <span>Phone</span>
            <input name="phone" required placeholder="+1 000 000 0000" className={fieldClass} />
          </label>
          <label className="space-y-2 text-sm text-warmGray">
            <span>Date</span>
            <input name="date" required type="date" className={fieldClass} />
          </label>
          <label className="space-y-2 text-sm text-warmGray">
            <span>Number of guests</span>
            <select name="guests" required className={fieldClass} defaultValue="">
              <option value="" disabled>
                Select guests
              </option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((guests) => (
                <option key={guests} value={guests}>
                  {guests}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2 text-sm text-warmGray sm:col-span-2">
            <span>Message</span>
            <textarea
              name="message"
              placeholder="Occasion, seating preference or dietary notes"
              className={`${fieldClass} min-h-36 resize-y`}
            />
          </label>
        </div>
        <div className="mt-7">
          <LuxuryButton type="submit" icon={<CalendarCheck size={17} />}>
            Send Request
          </LuxuryButton>
        </div>
      </form>

      <AnimatePresence>
        {submitted ? (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-obsidian/78 px-5 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-md rounded-lg border border-gold/50 bg-[#0D0C0A] p-8 text-center shadow-gold"
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
            >
              <button
                type="button"
                aria-label="Close reservation confirmation"
                onClick={() => setSubmitted(false)}
                className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-sm border border-premiumWhite/10 text-warmGray transition hover:border-gold hover:text-gold"
              >
                <X size={16} />
              </button>
              <CalendarCheck className="mx-auto text-gold" size={36} />
              <h2 className="mt-5 font-serifjp text-3xl font-light text-premiumWhite">
                Your reservation request has been received.
              </h2>
              <p className="mt-4 text-sm leading-7 text-warmGray">
                Our host team will contact you shortly to confirm availability
                and refine the details of your evening.
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
