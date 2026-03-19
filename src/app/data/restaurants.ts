export interface Restaurant {
  id: string;
  name: string;
  emoji: string;
  hours: string;
  openTime: string;
  closeTime: string;
  location: string;
  isOpen: boolean;
}

export const restaurants: Restaurant[] = [
  {
    id: 'baan-khanitha',
    name: 'Baan Khanitha',
    emoji: '🍜',
    hours: '11:00 – 22:00',
    openTime: '11:00',
    closeTime: '22:00',
    location: 'Sukhumvit',
    isOpen: true
  },
  {
    id: 'paste-bangkok',
    name: 'Paste Bangkok',
    emoji: '🍱',
    hours: '12:00 – 23:00',
    openTime: '12:00',
    closeTime: '23:00',
    location: 'Gaysorn Village',
    isOpen: true
  },
  {
    id: 'gaggan-anand',
    name: 'Gaggan Anand',
    emoji: '🍽️',
    hours: '18:00 – 23:00',
    openTime: '18:00',
    closeTime: '23:00',
    location: 'Phrom Phong',
    isOpen: true
  },
  {
    id: '80-20',
    name: '80/20',
    emoji: '🥘',
    hours: '17:30 – 22:30',
    openTime: '17:30',
    closeTime: '22:30',
    location: 'Charoen Krung',
    isOpen: false
  }
];
