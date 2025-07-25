import React from 'react';

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
        <main>
          <h1>Hello from React 19 SSR!</h1>
          <p>This page was rendered on the server using Express.js and React 19.</p>
        </main>
      </body>
    </html>
  );
};

export default App;
