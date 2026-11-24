const express = require('express');
const webRouter = express.Router();
const roomController = require('../controllers/roomController');

// The hotel is operated by one staff manager; clients do not have accounts.
webRouter.get('/', (req, res) => roomController.index(req, res));
webRouter.get('/rooms', (req, res) => roomController.index(req, res));
webRouter.get('/rooms/:id', (req, res) => roomController.show(req, res));

webRouter.get('/reservations', (req, res) => roomController.reservationFilter(req, res));
webRouter.get('/reservations/create', (req, res) => roomController.reservationCreate(req, res));
webRouter.post('/reservations/store', (req, res) => roomController.store(req, res));
webRouter.post(
    '/rooms/:id/reservations/:reservationIndex/status',
    (req, res) => roomController.updateReservationStatus(req, res)
);

module.exports = webRouter;