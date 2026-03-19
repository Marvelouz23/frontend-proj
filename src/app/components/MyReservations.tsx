import { useState } from "react";
import { useReservations } from "../contexts/ReservationContext";
import { format } from "date-fns";

export function MyReservations() {
  const { reservations, cancelReservation } = useReservations();
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  const upcomingReservations = reservations.filter(res => res.status === "upcoming");
  const pastReservations = reservations.filter(res => res.status === "past");

  const formatDate = (dateStr: string, timeStr: string) => {
    try {
      const date = new Date(dateStr);
      return `${format(date, "EEE, d MMM yyyy")} · ${timeStr}`;
    } catch {
      return `${dateStr} · ${timeStr}`;
    }
  };

  const handleCancel = (id: string) => {
    if (window.confirm("Are you sure you want to cancel this reservation?")) {
      cancelReservation(id);
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-primary)]">
        <div className="text-base font-medium text-[var(--color-text-primary)]">My bookings</div>
        <div className="text-xs text-[var(--color-text-secondary)]">
          {upcomingReservations.length} / {reservations.length} used
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Page Tabs */}
        <div className="flex gap-2 mb-5">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-[14px] py-[6px] rounded-[var(--border-radius-md)] text-[13px] cursor-pointer border ${
              activeTab === "upcoming"
                ? "bg-[var(--color-text-primary)] text-[var(--color-background-primary)] border-[var(--color-text-primary)]"
                : "bg-[var(--color-background-secondary)] text-[var(--color-text-secondary)] border-[var(--color-border-tertiary)]"
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-[14px] py-[6px] rounded-[var(--border-radius-md)] text-[13px] cursor-pointer border ${
              activeTab === "past"
                ? "bg-[var(--color-text-primary)] text-[var(--color-background-primary)] border-[var(--color-text-primary)]"
                : "bg-[var(--color-background-secondary)] text-[var(--color-text-secondary)] border-[var(--color-border-tertiary)]"
            }`}
          >
            Past
          </button>
        </div>

        {/* Upcoming Reservations */}
        {activeTab === "upcoming" && (
          <div>
            {upcomingReservations.length === 0 ? (
              <div className="text-center py-12 text-[var(--color-text-tertiary)] text-sm">
                No upcoming reservations
              </div>
            ) : (
              upcomingReservations.map((reservation) => (
                <div
                  key={reservation.id}
                  className="bg-[var(--color-background-primary)] border border-[var(--color-border-tertiary)] rounded-[var(--border-radius-lg)] p-[14px] mb-[10px]"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-medium text-[var(--color-text-primary)]">
                        {reservation.restaurantName}
                      </div>
                      <div className="text-xs text-[var(--color-text-secondary)] mt-[3px]">
                        {formatDate(reservation.date, reservation.time)}
                      </div>
                    </div>
                    <span className="text-[11px] px-[9px] py-[3px] rounded-[var(--border-radius-md)] bg-[#E6F1FB] text-[#185FA5] border border-[#B5D4F4]">
                      Upcoming
                    </span>
                  </div>
                  <div className="text-xs text-[var(--color-text-tertiary)] mt-[6px]">
                    {reservation.address}
                  </div>
                  <div className="flex gap-2 mt-3 pt-3 border-t border-[var(--color-border-tertiary)]">
                    <button className="flex-1 py-2 rounded-[var(--border-radius-md)] text-xs text-center bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] border border-[var(--color-border-tertiary)] cursor-pointer hover:bg-[var(--color-background-primary)]">
                      Edit date
                    </button>
                    <button
                      onClick={() => handleCancel(reservation.id)}
                      className="flex-1 py-2 rounded-[var(--border-radius-md)] text-xs text-center bg-[#FCEBEB] text-[#A32D2D] border border-[#F7C1C1] cursor-pointer hover:opacity-80"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Past Reservations */}
        {activeTab === "past" && (
          <div>
            {pastReservations.length === 0 ? (
              <div className="text-center py-12 text-[var(--color-text-tertiary)] text-sm">
                No past reservations
              </div>
            ) : (
              pastReservations.map((reservation) => (
                <div
                  key={reservation.id}
                  className="bg-[var(--color-background-primary)] border border-[var(--color-border-tertiary)] rounded-[var(--border-radius-lg)] p-[14px] mb-[10px]"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-medium text-[var(--color-text-primary)]">
                        {reservation.restaurantName}
                      </div>
                      <div className="text-xs text-[var(--color-text-secondary)] mt-[3px]">
                        {formatDate(reservation.date, reservation.time)}
                      </div>
                    </div>
                    <span className="text-[11px] px-[9px] py-[3px] rounded-[var(--border-radius-md)] bg-[var(--color-background-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border-tertiary)]">
                      Completed
                    </span>
                  </div>
                  <div className="text-xs text-[var(--color-text-tertiary)] mt-[6px]">
                    {reservation.address}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
}
