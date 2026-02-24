import { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import Apply from './Apply';

function App() {
  const [page, setPage] = useState('landing');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/apply') setPage('apply');
    else setPage('landing');
  }, []);

  if (page === 'apply') return <Apply />;
  if (page === 'dashboard') return <Dashboard />;

  // Landing page
  useEffect(() => {}, []);
  window.location.href = '/index.html';
  return null;
}

export default App;
