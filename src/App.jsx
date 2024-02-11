import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import './App.css'
// components
import RootLayout from './components/RootLayout';
import Main from './components/Main'
import Music from './components/Music'
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About'
import Slider from './components/Slider'
import ErrorPage from './components/ErrorPage';

const websiteRoutes = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      { path: '/', element: <Main/>},
      { path: '/muzyka', element: <Music/>},
      { path: '/kontakt', element: <Contact/>},
      { path: '/o-nas', element: <About/>},
    ],
  }
])

function App() {

  return (
    <RouterProvider router={websiteRoutes}></RouterProvider>
  )
}

export default App
