require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const WebSocket = require('ws');
const islandsRouter = require('./routes/islands');
const usersRouter = require('./routes/users');
const auth = require('./auth');

const app = express();
app.use(express.json());

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use('/islands', auth, islandsRouter);
app.use('/users', usersRouter);

const server = app.listen(process.env.PORT || 8080, () => console.log('Server Started'));

const wss = new WebSocket.Server({ server });
wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log('received: %s', message);
        // Traitement des messages
    });
    ws.send('something');
});
