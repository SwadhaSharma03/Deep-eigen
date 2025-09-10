// App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './Components/HomePage';
import SubscriptionPage from './Components/SubscriptionPage/SubscriptionPage';
import CoursesPage from './Components/Courses/CoursesPage';
import TopNavbar from './Components/Navbar/TopNavbar';
import PricingPlans from './Components/PricingPlans/PricingPlans';
import AppFooter from './Components/AppFooter/AppFooter';

import AOS from 'aos';
import 'aos/dist/aos.css';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <TopNavbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subscriptions" element={<SubscriptionPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/pricing" element={<PricingPlans />} />
      </Routes>

      <AppFooter />
    </Router>
  );
};

export default App;
