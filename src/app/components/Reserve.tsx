import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import { restaurants } from "../data/restaurants";
import { useReservations } from "../contexts/ReservationContext";

export function Reserve() {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const navigate = useNavigate();
  const { addReservation } = useReservations();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("19:00");
  const [guests, setGuests] = useState(2);
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);

  const restaurant = restaurants.find(r => r.id === restaurantId);

  if (!restaurant) {
    return (
      <div className="p-5">
        <p className="text-[var(--color-text-secondary)]">Restaurant not found</p>
      </div>
    );
  }

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (date && time) {
      addReservation({
        restaurantName: restaurant.name,
        restaurantEmoji: restaurant.emoji,
        address: `${restaurant.location}, Bangkok`,
        date,
        time,
        guests,
        status: 'upcoming'
      });
      setShowSuccessBanner(true);
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-primary)]">
        <div>
          <div className="text-base font-medium text-[var(--color-text-primary)]">
            Reserve a table
          </div>
          <div className="text-xs text-[var(--color-text-secondary)] mt-[2px]">
            {restaurant.name}
          </div>
        </div>
        <button
          onClick={() => navigate("/")}
          className="w-8 h-8 rounded-full bg-[var(--color-background-secondary)] border border-[var(--color-border-tertiary)] flex items-center justify-center cursor-pointer text-sm"
        >
          <ChevronLeft className="w-3 h-3 text-[var(--color-text-primary)]" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Restaurant Detail */}
        <div className="border border-[var(--color-border-tertiary)] rounded-[var(--border-radius-lg)] p-4 mb-5">
          <div className="h-[120px] rounded-[var(--border-radius-md)] bg-[var(--color-background-secondary)] flex items-center justify-center text-4xl mb-3 border border-[var(--color-border-tertiary)]">
            {restaurant.emoji}
          </div>
          <div className="text-base font-medium text-[var(--color-text-primary)]">
            {restaurant.name}
          </div>
          <div className="text-[13px] text-[var(--color-text-secondary)] mt-1">
            {restaurant.location}
          </div>
          <div className="flex gap-2 mt-2 flex-wrap">
            <span className="text-[11px] px-[10px] py-1 rounded-[var(--border-radius-md)] bg-[var(--color-background-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border-tertiary)]">
              {restaurant.hours}
            </span>
            <span className="text-[11px] px-[10px] py-1 rounded-[var(--border-radius-md)] bg-[#EAF3DE] text-[#3B6D11] border border-[#C0DD97]">
              Available
            </span>
          </div>
        </div>

        <form onSubmit={handleConfirmReservation}>
          {/* Date Field */}
          <div className="mb-4">
            <label className="text-[13px] text-[var(--color-text-secondary)] mb-[6px] block">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full px-[14px] py-[10px] border border-[var(--color-border-secondary)] rounded-[var(--border-radius-md)] text-sm bg-[var(--color-background-primary)] text-[var(--color-text-primary)] outline-none focus:border-[var(--color-border-primary)]"
            />
          </div>

          {/* Time Field */}
          <div className="mb-4">
            <label className="text-[13px] text-[var(--color-text-secondary)] mb-[6px] block">
              Time
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-[14px] py-[10px] border border-[var(--color-border-secondary)] rounded-[var(--border-radius-md)] text-sm bg-[var(--color-background-primary)] text-[var(--color-text-primary)] outline-none focus:border-[var(--color-border-primary)]"
            />
          </div>

          {/* Number of Guests Field */}
          <div className="mb-4">
            <label className="text-[13px] text-[var(--color-text-secondary)] mb-[6px] block">
              Number of guests
            </label>
            <input
              type="number"
              min="1"
              max="20"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full px-[14px] py-[10px] border border-[var(--color-border-secondary)] rounded-[var(--border-radius-md)] text-sm bg-[var(--color-background-primary)] text-[var(--color-text-primary)] outline-none focus:border-[var(--color-border-primary)]"
            />
          </div>

          {/* Confirm Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[var(--color-text-primary)] text-[var(--color-background-primary)] border-none rounded-[var(--border-radius-md)] text-sm font-medium cursor-pointer hover:opacity-90"
          >
            Confirm reservation
          </button>
        </form>

        {/* Success Banner */}
        {showSuccessBanner && (
          <div className="bg-[#EAF3DE] border border-[#C0DD97] rounded-[var(--border-radius-md)] px-[14px] py-3 mt-3">
            <p className="text-[13px] text-[#3B6D11]">
              Reservation confirmed! You can view it in My Bookings.
            </p>
          </div>
        )}

        {/* View Bookings Button */}
        <button
          onClick={() => navigate("/my-reservations")}
          className="w-full py-3 bg-[var(--color-background-primary)] text-[var(--color-text-primary)] border border-[var(--color-border-secondary)] rounded-[var(--border-radius-md)] text-sm cursor-pointer mt-2 hover:bg-[var(--color-background-secondary)]"
        >
          View my bookings
        </button>
      </div>
    </>
  );
}
