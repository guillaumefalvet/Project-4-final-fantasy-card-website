const dataMapper = require("../dataMapper");

const searchController = {
  searchPage: (req, res) => {
    res.render('search');
  },
  searchByOne(req, res) {
    res.redirect('/search')
    console.log(req.body);
  },
  async searchByElement(req, res) {
    try {
      console.log(req.body.element);
      const element = await dataMapper.getByElement(req.body.element);
      console.log(element);
      res.render('cardList', {
        cards: element,
        title: `Searched by element : ${req.body.element}`
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },
  async searchByLevel(req, res) {
    try {
      console.log(req.body);
      const level = await dataMapper.getByLevel(req.body.level);
      console.log(level);
      res.render('cardList', {
        cards: level,
        title: `Searched by level : ${req.body.level}`
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },
  async searchByDirection(req, res) {
    try {
      console.log(req.body);
      const vdid = Number(req.body.value);
      const direction = await dataMapper.getByDirection(req.body.direction, vdid);
      console.log(direction);
      res.render('cardList', {
        cards: direction,
        title: `Searched by direction: ${req.body.direction} and value ${req.body.value}`
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },
  async searchByName(req, res) {
    try {
      console.log(req.body);
      const searchname = await dataMapper.getByName(req.body.name);
      console.log(searchname);
      res.render('cardList', {
        cards: searchname,
        title: `Searched by name ${req.body.name}`
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  }


};

module.exports = searchController;