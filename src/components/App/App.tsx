import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { List } from '../../features/Boardgames/List';
import { Counter2 } from '../../features/Counter/Counter2';
import { Nav } from '../Nav/Nav';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Details } from '../../features/Boardgames/Details';
import { Login } from '../../features/Auth/Login';

import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Homepage</h1>} />
          <Route path="counter" element={<Counter2 initialCount={6} />} />
          <Route path="boardgames" element={<List />} />
          <Route path="boardgames/:id" element={<Details />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </QueryClientProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}
