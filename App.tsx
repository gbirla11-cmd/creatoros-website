import { useState } from 'react';
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return showDashboard ? (
    <Dashboard />
  ) : (
    <LandingPage onGetStarted={() => setShowDashboard(true)} />
  );
}

export default App;
