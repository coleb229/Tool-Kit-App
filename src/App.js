import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Tool Kit App';
  }, []);

  return (
    <div className='App'>
      <h1>hi</h1>
    </div>
  );
}

export default App;
