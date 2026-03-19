import { useState } from "react";
import { useNavigate } from "react-router";
import { Search, Calendar } from "lucide-react";
import { restaurants } from "../data/restaurants";

export function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Navigation Bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-primary)]">
        <div>
          <div className="text-base font-medium text-[var(--color-text-primary)]">Dine</div>
          <div className="text-xs text-[var(--color-text-secondary)] mt-[2px]">Find your table</div>
        </div>
        <button
          onClick={() => navigate("/my-reservations")}
          className="w-8 h-8 rounded-full bg-[var(--color-background-secondary)] border border-[var(--color-border-tertiary)] flex items-center justify-center cursor-pointer text-sm"
        >
          <Calendar className="w-[14px] h-[14px] text-[var(--color-text-primary)]" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 overflow-y-auto">
        {/* Search Bar */}
        <div className="flex items-center gap-[10px] bg-[var(--color-background-secondary)] border border-[var(--color-border-tertiary)] rounded-[var(--border-radius-lg)] px-[14px] py-[10px] mb-5">
          <Search className="w-[14px] h-[14px] text-[var(--color-text-tertiary)]" />
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none text-sm text-[var(--color-text-primary)] flex-1 placeholder:text-[var(--color-text-tertiary)]"
          />
        </div>

        {/* Section Label */}
        <div className="text-xs font-medium text-[var(--color-text-secondary)] mb-3 uppercase tracking-wide">
          All restaurants
        </div>

        {/* Restaurant Cards */}
        {filteredRestaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            onClick={() => navigate(`/reserve/${restaurant.id}`)}
            className="bg-[var(--color-background-primary)] border border-[var(--color-border-tertiary)] rounded-[var(--border-radius-lg)] p-[14px] mb-[10px] cursor-pointer transition-colors hover:bg-[var(--color-background-secondary)]"
          >
            <div className="w-full h-[100px] rounded-[var(--border-radius-md)] bg-[var(--color-background-secondary)] mb-[10px] flex items-center justify-center text-[28px] border border-[var(--color-border-tertiary)]">
              {restaurant.emoji}
            </div>
            <div className="flex justify-between items-start">
              <div>
                <div className="text-sm font-medium text-[var(--color-text-primary)]">
                  {restaurant.name}
                </div>
                <div className="text-[11px] text-[var(--color-text-secondary)] mt-[3px]">
                  {restaurant.hours} · {restaurant.location}
                </div>
              </div>
              <span
                className={`text-[11px] px-2 py-[3px] rounded-[var(--border-radius-md)] border ${
                  restaurant.isOpen
                    ? "bg-[#EAF3DE] text-[#3B6D11] border-[#C0DD97]"
                    : "bg-[#FAECE7] text-[#993C1D] border-[#F5C4B3]"
                }`}
              >
                {restaurant.isOpen ? "Open" : "Closed"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
