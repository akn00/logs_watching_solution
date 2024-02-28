import React, { useState, useEffect } from 'react';

function App() {
  const [log, setLog] = useState('');

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:4000');

    eventSource.onmessage = (event) => {
      setLog(prevLog => {
        const newLog = prevLog + event.data;
        const lines = newLog.split('\n');
        const firstTenLines = lines.slice(0, 10).join('\n');
        return firstTenLines;
      });
    };

    return () => {
      eventSource.close(); 
    };
  }, []);

  return (
    <div>
      <pre>{log}</pre>
    </div>
  );    
}

export default App;
