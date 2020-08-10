const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, dir: "./client" });
const handle = nextApp.getRequestHandler();
// const { Client } = require('pg');
// const {pool} = require('./server/config')

require('dotenv/config');

// const getBooks = (request, response) => {
//     pool.query('SELECT * FROM blogs_post', (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
// }

// const connectDb = async () => {
//     try {
//         const client = new Client({
//             user: 'iapptechnology',
//             host: 'localhost',
//             database: 'django_db',
//             password: 'deshario',
//             port: 5432,
//         });
//         await client.connect();
//         client.query('SELECT NOW()', (err, res) => {
//             console.log(err, res)
//             client.end()
//         })
//         console.info(`> 💻 Database connected on pid : ${process.pid} <`)
//     } catch (error) {
//         console.error(`> Connection error: ${error.stack} on pid : ${process.pid} <`)
//         process.exit(1);
//     }
// }


(async () => {
    // await connectDb();
    await nextApp.prepare(); // Prepare to use another server for handling SSR
    const app = express();
    const serverRouter = require('./server/routes.js');
    const port = process.env.PORT || 3000;
    app.use(express.urlencoded({ extended: true })); // Body Parser
    app.use(express.json()); // Body Parser
    app.use(serverRouter); // Apply Routes

    // app.route('/books').get(getBooks);

    app.get('*', (req, res) => handle(req, res));
    app.listen(port, (err) => {
        if (err) throw err
        console.log(`> 🚀 Ready on http://localhost:${port} <`)
    });
})();