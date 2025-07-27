# React 19 + Express.js SSR Template

This is a minimal server-side rendering (SSR) template using React 19 and Express.js.

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the server:
   ```sh
   npm run dev
   ```
3. Your browser will automatically open at [http://localhost:3000](http://localhost:3000) once it is ready!

## Building for production
```sh
# bundle all the necessary files in the build directory
npm run build
# start the server
npm run start
```

## Project Structure
- `src/server.js` – Express server entry point for webpack
- `src/client.js` – Client-side entry point for webpack (needed for hydration)
- `src/App.jsx` – Main React component rendered on the server

## Notes
- This template renders a simple React component to HTML on the server.
- You can add components and pages to `src/ui` as needed.
