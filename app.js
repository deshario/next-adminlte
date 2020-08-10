const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, dir: "./client" });
const handle = nextApp.getRequestHandler();

require('dotenv/config');

(async () => {
    await nextApp.prepare(); // Prepare to use another server for handling SSR
    const app = express();
    const serverRouter = require('./server/routes.js');
    const port = process.env.PORT || 3000;
    app.use(express.urlencoded({ extended: true })); // Body Parser
    app.use(express.json()); // Body Parser
    app.use(serverRouter); // Apply Routes
    app.get('*', (req, res) => handle(req, res));
    app.listen(port, (err) => {
        if (err) throw err
        console.log(`> 🚀 Ready on http://localhost:${port} <`)
    });
})();