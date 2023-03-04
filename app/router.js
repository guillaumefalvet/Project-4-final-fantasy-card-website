const express = require('express');
const deckController = require('./controllers/deckController');
const router = express.Router();

const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');


router.get('/', mainController.homePage);
router.get('/card/:id', mainController.cardPage);
router.get('/deck', deckController.deckPage);
router.get('/deck/add/:id', deckController.addDeck);
router.get('/deck/remove/:id', deckController.removeDeck);
router.get('/search', searchController.searchPage);
router.post('/search/element', searchController.searchByElement);
router.post('/search/level', searchController.searchByLevel);
router.post('/search/name', searchController.searchByName);
router.post('/search/values', searchController.searchByDirection);

module.exports = router;