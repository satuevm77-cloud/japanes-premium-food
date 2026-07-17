"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type CalendarPickerProps = {
  value: string;
  onChange: (date: string) => void;
  className?: string;
};

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

function formatDate(year: number, month: number, day: number) {
  const m = String(month + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

export function CalendarPicker({ value, onChange, className }: CalendarPickerProps) {
  const today = useMemo(() => new Date(), []);
  const todayStr = formatDate(today.getFullYear(), today.getMonth(), today.getDate());

  const parsed = value ? new Date(value + "T00:00:00") : null;
  const [viewYear, setViewYear] = useState(parsed?.getFullYear() ?? today.getFullYear());
  const [viewMonth, setViewMonth] = useState(parsed?.getMonth() ?? today.getMonth());

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const cells = useMemo(() => {
    const result: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) result.push(null);
    for (let d = 1; d <= daysInMonth; d++) result.push(d);
    return result;
  }, [firstDay, daysInMonth]);

  const prevMonth = useCallback(() => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  }, [viewMonth]);

  const nextMonth = useCallback(() => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  }, [viewMonth]);

  const isPast = (day: number) => {
    const dateStr = formatDate(viewYear, viewMonth, day);
    return dateStr < todayStr;
  };

  return (
    <div className={cn("rounded-lg border border-premiumWhite/10 bg-[#0D0C0A] p-4", className)}>
      <div className="mb-4 flex items-center justify-between">
        <button
          type="button"
          aria-label="Previous month"
          onClick={prevMonth}
          className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-premiumWhite/10 text-warmGray transition hover:border-gold hover:text-gold"
        >
          <ChevronLeft size={16} />
        </button>
        <p className="font-serifjp text-lg text-premiumWhite">
          {MONTH_NAMES[viewMonth]} {viewYear}
        </p>
        <button
          type="button"
          aria-label="Next month"
          onClick={nextMonth}
          className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-premiumWhite/10 text-warmGray transition hover:border-gold hover:text-gold"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="mb-2 grid grid-cols-7 gap-1">
        {WEEKDAYS.map((day) => (
          <p key={day} className="py-1 text-center text-xs uppercase text-warmGray/60">
            {day}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, index) => {
          if (day === null) {
            return <div key={`empty-${index}`} />;
          }

          const dateStr = formatDate(viewYear, viewMonth, day);
          const isSelected = dateStr === value;
          const isToday = dateStr === todayStr;
          const past = isPast(day);

          return (
            <button
              key={day}
              type="button"
              disabled={past}
              onClick={() => onChange(dateStr)}
              className={cn(
                "relative flex h-10 items-center justify-center rounded-sm text-sm transition",
                past && "cursor-not-allowed text-warmGray/30",
                !past && !isSelected && "text-premiumWhite/80 hover:bg-premiumWhite/10",
                isSelected && "bg-gold text-obsidian font-medium",
                isToday && !isSelected && "border border-gold/50"
              )}
            >
              {day}
              {isToday && !isSelected && (
                <span className="absolute bottom-1 left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-full bg-gold/60" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
