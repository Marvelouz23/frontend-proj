import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Reservation {
  id: string;
  restaurantName: string;
  restaurantEmoji: string;
  address: string;
  date: string;
  time: string;
  guests: number;
  status: 'upcoming' | 'past';
}

interface ReservationContextType {
  reservations: Reservation[];
  addReservation: (reservation: Omit<Reservation, 'id'>) => void;
  cancelReservation: (id: string) => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [reservations, setReservations] = useState<Reservation[]>([
    {
      id: '1',
      restaurantName: 'Baan Khanitha',
      restaurantEmoji: '🍜',
      address: 'Sukhumvit, Bangkok',
      date: '2026-03-26',
      time: '19:00',
      guests: 2,
      status: 'upcoming'
    },
    {
      id: '2',
      restaurantName: 'Paste Bangkok',
      restaurantEmoji: '🍱',
      address: 'Gaysorn Village, Bangkok',
      date: '2026-04-04',
      time: '20:00',
      guests: 4,
      status: 'upcoming'
    },
    {
      id: '3',
      restaurantName: 'Gaggan Anand',
      restaurantEmoji: '🍽️',
      address: 'Phrom Phong, Bangkok',
      date: '2026-02-14',
      time: '19:30',
      guests: 2,
      status: 'past'
    }
  ]);

  const addReservation = (reservation: Omit<Reservation, 'id'>) => {
    const newReservation = {
      ...reservation,
      id: Date.now().toString(),
    };
    setReservations(prev => [...prev, newReservation]);
  };

  const cancelReservation = (id: string) => {
    setReservations(prev => prev.filter(res => res.id !== id));
  };

  return (
    <ReservationContext.Provider value={{ reservations, addReservation, cancelReservation }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservations() {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservations must be used within ReservationProvider');
  }
  return context;
}
