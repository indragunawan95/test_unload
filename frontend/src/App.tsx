import React, { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    const deleteFileOnUnload = async () => {
      const fileId = 'test-file-id'; // Replace with your actual file ID
      const url = 'http://localhost:3000/delete-file';

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileId }),
        keepalive: true,
      });
      console.log('Request sent successfully');

    };

    window.addEventListener('beforeunload', deleteFileOnUnload);

    return () => {
      window.removeEventListener('beforeunload', deleteFileOnUnload);
    };
  }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default App;
