
import { Route, Routes, useLocation } from 'react-router';
import './App.css';
import { HashRouter } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import Home from './components/Home/Home';
import AboutPage from './components/pages/AboutPage';
import Services from './components/pages/Services';
import ContactUs from './components/pages/ContactUs';
import MyPortfolio from './components/pages/MyPortfolio';
import { useEffect } from 'react';

function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  return (
    <>
      <HashRouter>
      <ScrollToTop/>
        <Routes>
          <Route  exact element={<MainLayout />}>
            <Route index  element={<Home />} />
            <Route path='/about'  element={<AboutPage />} />
            <Route path='/services'  element={<Services />} />
            <Route path='/contactus'  element={<ContactUs />} />
            <Route path='/myportfolio'  element={<MyPortfolio />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
