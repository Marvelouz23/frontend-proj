import { RouterProvider } from 'react-router';
import { router } from './routes';
import { ReservationProvider } from './contexts/ReservationContext';

function App() {
  return (
    <ReservationProvider>
      <RouterProvider router={router} />
    </ReservationProvider>
  );
}

export default App;
