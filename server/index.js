import express from 'express';
import Loadable from 'react-loadable';
import List from '../data/data.js';

import serverRenderer from './middleware/renderer';

const PORT = 3000;
const path = require("path");

// initialize the application and create the routes
const app = express();
const router = express.Router();


app.get('/todo/taskList', function (req, res) {
  res.send(List)
});

// root (/) should always serve our server rendered page
router.use('^/$', serverRenderer);

// other static resources should just be served as they are
router.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

app.use(router);

// start the app
Loadable.preloadAll().then(() => {
    app.listen(PORT, (error) => {
        if (error) {
            return console.log('something bad happened', error);
        }

        console.log("listening on " + PORT + "...");
    });
});