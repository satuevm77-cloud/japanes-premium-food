"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, Clock, X } from "lucide-react";
import { FormEvent, useState } from "react";

import { CalendarPicker } from "@/components/ui/CalendarPicker";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-sm border border-premiumWhite/12 bg-obsidian/55 px-4 py-3 text-sm text-premiumWhite placeholder:text-warmGray/65 transition focus:border-gold focus:outline-none";

const TIME_SLOTS = [
  "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"
];

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const { t } = useI18n();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
    setSelectedDate("");
    setSelectedTime("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-premiumWhite/10 bg-premiumWhite/[0.035] p-5 shadow-emerald sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-warmGray">
            <span>{t.reservation.name}</span>
            <input name="name" required placeholder={t.reservation.namePlaceholder} className={fieldClass} />
          </label>
          <label className="space-y-2 text-sm text-warmGray">
            <span>{t.reservation.phone}</span>
            <input name="phone" required placeholder={t.reservation.phonePlaceholder} className={fieldClass} />
          </label>
        </div>

        <div className="mt-5">
          <p className="mb-2 text-sm text-warmGray">{t.reservation.selectDate}</p>
          <input type="hidden" name="date" required value={selectedDate} />
          <CalendarPicker value={selectedDate} onChange={setSelectedDate} />
        </div>

        <div className="mt-5">
          <p className="mb-2 flex items-center gap-2 text-sm text-warmGray">
            <Clock size={14} />
            {t.reservation.selectTime}
          </p>
          <input type="hidden" name="time" required value={selectedTime} />
          <div className="grid grid-cols-4 gap-2">
            {TIME_SLOTS.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => setSelectedTime(time)}
                className={cn(
                  "rounded-sm border px-3 py-2.5 text-sm transition",
                  selectedTime === time
                    ? "border-gold bg-gold text-obsidian font-medium"
                    : "border-premiumWhite/12 bg-obsidian/55 text-premiumWhite/80 hover:border-gold/60"
                )}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-warmGray">
            <span>{t.reservation.guests}</span>
            <select name="guests" required className={fieldClass} defaultValue="">
              <option value="" disabled>{t.reservation.selectGuests}</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((guests) => (
                <option key={guests} value={guests}>{guests}</option>
              ))}
            </select>
          </label>
          <label className="space-y-2 text-sm text-warmGray">
            <span>{t.reservation.occasion}</span>
            <select name="occasion" className={fieldClass} defaultValue="">
              <option value="" disabled>{t.reservation.selectOccasion}</option>
              <option value="dinner">{t.reservation.occasionDinner}</option>
              <option value="birthday">{t.reservation.occasionBirthday}</option>
              <option value="anniversary">{t.reservation.occasionAnniversary}</option>
              <option value="business">{t.reservation.occasionBusiness}</option>
              <option value="date">{t.reservation.occasionDate}</option>
              <option value="celebration">{t.reservation.occasionCelebration}</option>
            </select>
          </label>
        </div>

        <label className="mt-5 block space-y-2 text-sm text-warmGray">
          <span>{t.reservation.specialRequests}</span>
          <textarea
            name="message"
            placeholder={t.reservation.specialRequestsPlaceholder}
            className={`${fieldClass} min-h-28 resize-y`}
          />
        </label>

        <div className="mt-7">
          <LuxuryButton type="submit" icon={<CalendarCheck size={17} />}>
            {t.reservation.sendRequest}
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
                {t.reservation.confirmation}
              </h2>
              <p className="mt-4 text-sm leading-7 text-warmGray">
                {t.reservation.confirmationDesc}
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
