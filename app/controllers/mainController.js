const dataMapper = require('../dataMapper.js');

const mainController = {
  homePage: async (req, res) => {
    try {
      const cards = await dataMapper.getAllCards();
      res.render('cardList', {
        cards,
        title: 'Liste des cartes'
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },
  async cardPage(req, res) {
    const id = Number(req.params.id)
    try {
      const card = await dataMapper.getOne(id);
      if (card) {
        console.log(card);
        res.render('cardDetail', {
          card,
          title: 'Détails d\'une carte'
        })
      } else {
        res.redirect('/');
      }
    } catch (error) {
      console.trace(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  }
};

module.exports = mainController;
