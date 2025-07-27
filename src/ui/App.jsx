import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ClientSideExample from './pages/ClientSideExample/ClientSideExample';
import ApiCallExample from './pages/ApiCallExample/ApiCallExample';
import './App.css';

const App = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR Template</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cs-example" element={<ClientSideExample />} />
          <Route path="/api-example" element={<ApiCallExample />} />
          {/* Add more routes as needed */}
        </Routes>
      </body>
    </html>
  );
};

export default App;
