const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');

// Import the main App component
const App = require('./ui/App').default;

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (if any)
app.use(express.static('build'));

app.get('*', (req, res) => {
  const { pipe, abort} = ReactDOMServer.renderToPipeableStream(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
    {
      bootstrapScripts: ['/client.js'],
      onShellReady: () => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        pipe(res);
      },
      onShellError: (error) => {
        console.error('Error during server-side rendering:', error);
        res.status(500).send('Internal Server Error');
      },
      onError: (error) => {
        console.error('Error during streaming:', error);
        abort();
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
