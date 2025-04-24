// src/App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Paste from './Components/Paste';
import Home from './Components/Home';
import ViewPaste from './Components/ViewPaste';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: '/pastes',
    element: (
      <>
        <Navbar />
        <Paste />
      </>
    ),
  },
  {
    path: '/pastes/:id',
    element: (
      <>
        <Navbar />
        <ViewPaste />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
