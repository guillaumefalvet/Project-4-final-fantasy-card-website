const dataMapper = require('../dataMapper');

const deckController = {
    deckPage(req, res) {
        res.render('deck', {
            deck: true,
            cards: req.session.card,
            title: 'deck page'
        })
    },
    async addDeck(req, res) {
        // TODO: FAIL SAFE TO CHECK IF THE PARAMS ID IS A NUMBER
        function containsOnlyNumbers(str) {
            return /^(\d+,)*(\d+)$/.test(str);
        }
        if (containsOnlyNumbers(req.params.id)) {
            const id = Number(req.params.id)
            try {
                const card = await dataMapper.getOne(id);
                if (!req.session.card) {
                    req.session.card = [];
                    req.session.card.push(card);
                    console.log(req.session.card);
                    res.redirect('/deck');
                } else {
                    const doesExistAlready = req.session.card.find(element => element.id === id);
                    if (!doesExistAlready) {
                        console.log(card);
                        req.session.card.push(card);
                        console.log(req.session.card);
                        res.redirect('/deck');
                    } else {
                        res.redirect('/deck');
                    }

                }
            } catch (error) {
                console.trace(error);
                res.status(500).send(`An error occured with the database :\n${error.message}`);
            }
        } else {
            console.log('URL IS NaN');
            res.send('URL IS NaN');
        }

    },
    async removeDeck(req, res) {
        // TODO: FAIL SAFE TO CHECK IF THE PARAMS ID IS A NUMBER
        function containsOnlyNumbers(str) {
            return /^(\d+,)*(\d+)$/.test(str);
        }
        if (containsOnlyNumbers(req.params.id)) {
            console.log(req.session.card);
            const id = Number(req.params.id);
            const indexOfCard = req.session.card.findIndex((card) => card.id === id);
            req.session.card.splice(indexOfCard, 1);
            res.redirect('/deck');
        } else {
            console.log('URL IS NaN');
            res.send('URL IS NaN');
        }
    }
}
module.exports = deckController;